import { Router } from 'express';
import { prisma } from '../db/prisma/client';
import { feedbackSchema, idParamSchema } from '../validation/schemas';

const router = Router();

// POST /api/feedback/:suggestionId
router.post('/:suggestionId', async (req, res) => {
  const parsedId = idParamSchema.safeParse(req.params.suggestionId);
  if (!parsedId.success) {
    return res.status(400).json({ error: 'Invalid suggestion id' });
  }

  const suggestionId = parsedId.data;

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