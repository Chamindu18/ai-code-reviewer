import { Router } from 'express';
import { prisma } from '../db/prisma/client';

const router = Router();

function toDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

// GET /api/stats
router.get('/', async (req, res) => {
  const totalReviews = await prisma.review.count();
  const completedReviews = await prisma.review.count({ where: { status: 'completed' } });
  const failedReviews = await prisma.review.count({ where: { status: 'failed' } });
  const totalSuggestions = await prisma.suggestion.count();

  const acceptedCount = await prisma.suggestion.count({ where: { feedback: 'accepted' } });
  const totalFeedbackCount = await prisma.suggestion.count({
    where: { feedback: { not: null } },
  });

  const averageSuggestionsPerReview = totalReviews === 0 ? 0 : totalSuggestions / totalReviews;
  const acceptanceRate = totalFeedbackCount === 0 ? 0 : acceptedCount / totalFeedbackCount;

  const since = startOfDay(new Date());
  since.setDate(since.getDate() - 6);

  const trendRows = await prisma.$queryRaw<Array<{ date: Date; count: number }>>`
    SELECT date_trunc('day', created_at) AS date,
           COUNT(*)::int AS count
    FROM reviews
    WHERE created_at >= ${since}
    GROUP BY date
    ORDER BY date ASC
  `;

  const trendMap = new Map<string, number>();
  for (const row of trendRows) {
    trendMap.set(toDateKey(new Date(row.date)), Number(row.count));
  }

  const recentTrend: Array<{ date: string; count: number }> = [];
  for (let i = 0; i < 7; i += 1) {
    const day = new Date(since);
    day.setDate(since.getDate() + i);
    const key = toDateKey(day);
    recentTrend.push({ date: key, count: trendMap.get(key) ?? 0 });
  }

  res.json({
    totalReviews,
    completedReviews,
    failedReviews,
    averageSuggestionsPerReview,
    acceptanceRate,
    recentTrend,
  });
});

export default router;
