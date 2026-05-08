import request from 'supertest';
import express from 'express';
import reviewRoutes from '../../routes/reviews';
import { prisma } from '../../db/prisma/client';
import { requireApiKey } from '../../middleware/requireAuth';
import { env } from '../../config/env';

const app = express();
app.use(express.json());
app.use(requireApiKey);
app.use('/api/reviews', reviewRoutes);

jest.mock('../../db/prisma/client', () => ({
  prisma: {
    review: {
      findMany: jest.fn(),
      count: jest.fn(),
    },
  },
}));

describe('GET /api/reviews', () => {
  it('should return paginated reviews', async () => {
    const mockReviews = [
      {
        id: 1,
        prNumber: 101,
        prTitle: 'Add feature',
        status: 'completed',
        _count: { suggestions: 5 },
        repo: { fullName: 'org/repo' },
      },
    ];

    (prisma.review.findMany as jest.Mock).mockResolvedValue(mockReviews);
    (prisma.review.count as jest.Mock).mockResolvedValue(1);

    const res = await request(app)
      .get('/api/reviews?page=1')
      .set('Authorization', `Bearer ${env.API_SECRET}`);

    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(1);
    expect(res.body.pagination.page).toBe(1);
  });

  it('should require API key', async () => {
    const res = await request(app).get('/api/reviews');

    expect(res.status).toBe(401);
  });
});
