import Link from 'next/link';
import { getReviews, getStats } from '@/lib/api';
import { ReviewCard } from '@/components/ReviewCard';
import { StatsPanel } from '@/components/StatsPanel';

interface Review {
  id: number;
  prTitle?: string;
  prNumber: number;
  prAuthor?: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'partial';
  repo?: { fullName?: string };
  createdAt?: string;
  _count: { suggestions: number };
}

interface ReviewsResponse {
  data: Review[];
  pagination: { total: number; page?: number; pageSize?: number; pages?: number };
}

interface ReviewStats {
  totalReviews: number;
  completedReviews: number;
  failedReviews: number;
  averageSuggestionsPerReview: number;
  acceptanceRate: number;
  recentTrend?: Array<{ date: string; count: number }>;
}

export default async function HomePage() {
  const [reviewsResult, statsResult] = await Promise.allSettled([
    getReviews(),
    getStats(),
  ]);

  const reviewsData: ReviewsResponse | null =
    reviewsResult.status === 'fulfilled' ? reviewsResult.value : null;

  const stats: ReviewStats | null =
    statsResult.status === 'fulfilled' ? statsResult.value : null;

  return (
    <main className="app-container py-10">
      <section className="glass-panel rounded-3xl p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-200/70">
              Production-ready AI reviews
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Catch risky PRs early, keep reviewers focused.
            </h1>
            <p className="mt-4 text-base text-gray-300 sm:text-lg">
              This dashboard listens to GitHub webhooks, processes diffs with Gemini, and posts
              line-level feedback back to pull requests. Track outcomes, refine signal quality,
              and capture developer feedback in one place.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/reviews"
                className="rounded-full bg-emerald-400/20 px-5 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/30"
              >
                View all reviews
              </Link>
              <Link
                href="/"
                className="rounded-full border border-gray-700 px-5 py-2 text-sm font-semibold text-gray-200 hover:border-sky-400"
              >
                Dashboard overview
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-5">
              <div className="text-sm text-gray-400">System status</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-2xl font-semibold text-emerald-200">Live</span>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">
                  Queue healthy
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-5">
              <div className="text-sm text-gray-400">Webhook latency</div>
              <div className="mt-2 text-2xl font-semibold">{'< 3s'}</div>
              <p className="mt-1 text-xs text-gray-500">
                Jobs are queued instantly to meet GitHub webhook limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Review performance</h2>
          <Link href="/reviews" className="text-sm text-sky-200 hover:text-sky-100">
            Open review list
          </Link>
        </div>
        <div className="mt-6">
          {stats ? (
            <StatsPanel stats={stats} />
          ) : (
            <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-6 text-gray-400">
              Stats are not available yet. Start receiving PR webhooks to populate analytics.
            </div>
          )}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Recent reviews</h2>
          <span className="text-sm text-gray-500">
            {reviewsData?.pagination.total ?? 0} total
          </span>
        </div>
        <div className="mt-6 space-y-4">
          {reviewsData?.data?.length ? (
            reviewsData.data.slice(0, 3).map((review) => (
              <ReviewCard
                key={review.id}
                id={review.id}
                prTitle={review.prTitle}
                prNumber={review.prNumber}
                prAuthor={review.prAuthor}
                status={review.status}
                suggestionCount={review._count?.suggestions || 0}
                repoFullName={review.repo?.fullName}
                createdAt={review.createdAt}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-700 p-6 text-gray-400">
              No reviews yet. Connect a repository webhook to see activity.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}