import { Router } from 'express';
import { prisma } from '../db/prisma/client';
import { idParamSchema, paginationQuerySchema } from '../validation/schemas';

const router = Router();

// GET /api/reviews?page=1
router.get('/', async (req, res) => {
  const parsedQuery = paginationQuerySchema.safeParse({ page: req.query.page });
  if (!parsedQuery.success) {
    return res.status(400).json({ error: 'Invalid page query parameter' });
  }

  const page = parsedQuery.data.page;
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
  const parsedId = idParamSchema.safeParse(req.params.id);
  if (!parsedId.success) {
    return res.status(400).json({ error: 'Invalid review id' });
  }

  const id = parsedId.data;
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