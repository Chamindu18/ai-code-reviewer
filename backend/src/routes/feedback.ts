import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../db/prisma/client';

const router = Router();

// Validation schema for the submitted feedback
const feedbackSchema = z.object({
  feedback: z.enum(['accepted', 'rejected']),
});

// POST /api/feedback/:suggestionId
router.post('/:suggestionId', async (req, res) => {
  const suggestionId = Number(req.params.suggestionId);

  // Validate the request body
  const parse = feedbackSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Invalid feedback value' });
  }

  // Update the suggestion with the developer's feedback
  await prisma.suggestion.update({
    where: { id: suggestionId },
    data: { feedback: parse.data.feedback },
  });

  res.json({ success: true });
});

export default router;