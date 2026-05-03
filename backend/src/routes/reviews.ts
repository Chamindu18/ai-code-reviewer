import { Router } from 'express';
import { prisma } from '../db/prisma/client';

const router = Router();

// GET /api/reviews?page=1
router.get('/', async (req, res) => {
  // Parse page number from query string, default to 1, minimum 1
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = 20;                // 20 reviews per page
  const skip = (page - 1) * limit; // offset for pagination

  // Fetch reviews and total count in parallel
  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
      include: {
        _count: { select: { suggestions: true } },   // how many suggestions per review
        repo: { select: { fullName: true } },        // get repo name
      },
    }),
    prisma.review.count(),
  ]);

  res.json({
    data: reviews,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});

// GET /api/reviews/:id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const review = await prisma.review.findUnique({
    where: { id },
    include: {
      suggestions: { orderBy: { severity: 'desc' } },  // high‑severity first
      repo: true,
    },
  });

  if (!review) return res.status(404).json({ error: 'Not found' });
  res.json(review);
});

export default router;