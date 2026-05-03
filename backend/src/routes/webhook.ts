import { Router } from 'express';
import { verifyGitHubWebhook } from '../middleware/verifyWebHook';
import { reviewQueue } from '../queue/reviewQueue';
import { prisma } from '../db/prisma/client';
import { logger } from '../config/logger';

const router = Router();

router.post('/github', verifyGitHubWebhook, async (req, res) => {
  // GitHub sends the event type in the X-GitHub-Event header
  const event = req.headers['x-github-event'] as string;
  // X-GitHub-Delivery is a unique ID for every webhook delivery (used for idempotency)
  const delivery = req.headers['x-github-delivery'] as string;
  const { action } = req.body;

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
  await reviewQueue.add('process-pr', { delivery, payload: req.body });

  logger.info({ delivery, pr: req.body.pull_request.number }, 'Webhook queued');
  res.status(202).json({ message: 'Queued for processing' });
});

export default router;