import { Router } from 'express';
import { verifyGitHubWebhook } from '../middleware/verifyWebhook';
import { reviewQueue } from '../queue/reviewQueue';
import { prisma } from '../db/prisma/client';
import { logger } from '../config/logger';
import { z } from 'zod';

const webhookBodySchema = z.object({
  action: z.string(),
  pull_request: z.object({
    number: z.number(),
    title: z.string().optional(),
    user: z.object({ login: z.string() }),
  }),
  repository: z.object({
    id: z.number(),
    full_name: z.string(),
    name: z.string(),
    owner: z.object({ login: z.string() }),
  }),
});

const router = Router();

router.post('/github', verifyGitHubWebhook, async (req, res) => {
  // GitHub sends the event type in the X-GitHub-Event header
  const event = req.headers['x-github-event'] as string;
  // X-GitHub-Delivery is a unique ID for every webhook delivery (used for idempotency)
  const delivery = req.headers['x-github-delivery'] as string;
  const parsedBody = webhookBodySchema.safeParse(req.body);
  if (!parsedBody.success) {
    return res.status(400).json({ error: 'Invalid webhook payload' });
  }

  const payload = parsedBody.data;
  const { action } = payload;

  // We only care about pull_request events
  if (event !== 'pull_request') {
    return res.status(200).json({ ignored: true, reason: 'not a PR event' });
  }

  // Only process when a PR is opened or a new commit is pushed (synchronize)
  if (!['opened', 'synchronize'].includes(action)) {
    return res.status(200).json({ ignored: true, reason: 'action not handled' });
  }

  // Idempotency check: if we've already seen this delivery ID, skip processing
  const existing = await prisma.webhookEvent.findUnique({ where: { id: delivery } });
  if (existing) {
    return res.status(200).json({ ignored: true, reason: 'already processed' });
  }

  // Record the delivery ID so future retries are ignored
  await prisma.webhookEvent.create({
    data: { id: delivery, event, processed: true },
  });

  // Queue the job (do NOT await it – we must respond to GitHub in under 3 seconds)
  reviewQueue
    .add('process-pr', { delivery, payload: { ...payload, delivery } })
    .catch((error) => logger.error({ delivery, error }, 'Failed to enqueue review'));

  logger.info({ delivery, pr: payload.pull_request.number }, 'Webhook queued');
  return res.status(202).json({ message: 'Queued for processing' });
});

export default router;