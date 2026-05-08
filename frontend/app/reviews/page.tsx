'use client';

import { useQuery } from '@tanstack/react-query';
import { getReviews } from '@/lib/api';
import { ReviewCard } from '@/components/ReviewCard';
import { useState } from 'react';

export default function ReviewsPage() {
	interface ReviewListItem {
		id: number;
		prTitle?: string;
		prNumber: number;
		prAuthor?: string;
		status: 'pending' | 'processing' | 'completed' | 'failed' | 'partial';
		createdAt?: string;
		_count?: { suggestions?: number };
		repo?: { fullName?: string };
	}

	const [page, setPage] = useState(1);

	const { data, isLoading, error } = useQuery({
		queryKey: ['reviews', page],
		queryFn: () => getReviews(page),
	});

	if (error) {
		return (
			<main className="app-container py-10">
				<h1 className="text-3xl font-semibold mb-6">Reviews</h1>
				<div className="rounded-2xl border border-red-900/60 bg-red-950/60 p-4 text-red-200">
					Error loading reviews: {error instanceof Error ? error.message : 'Unknown error'}
				</div>
			</main>
		);
	}

	return (
		<main className="app-container py-10">
			<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
				<div>
					<p className="text-sm uppercase tracking-[0.2em] text-emerald-200/70">Review history</p>
					<h1 className="text-3xl font-semibold">All reviews</h1>
					<p className="text-gray-400">
						Search across processed PRs, see statuses, and open suggestion feedback.
					</p>
				</div>
				<div className="rounded-2xl border border-gray-800/80 bg-gray-950/70 px-4 py-3 text-sm text-gray-300">
					Total reviews: {data?.pagination?.total ?? 0}
				</div>
			</div>

			{isLoading ? (
				<div className="mt-8 space-y-4">
					{[...Array(5)].map((_, i) => (
						<div key={i} className="h-24 rounded-2xl bg-gray-800/80 animate-pulse" />
					))}
				</div>
			) : data?.data?.length === 0 ? (
				<div className="mt-10 rounded-2xl border border-dashed border-gray-700 p-8 text-center text-gray-400">
					No reviews yet. Webhooks will appear here once PRs are reviewed.
				</div>
			) : (
				<>
					<div className="mt-8 space-y-4">
						{data?.data?.map((review: ReviewListItem) => (
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
						))}
					</div>

					{data?.pagination && (
						<div className="mt-10 flex flex-wrap items-center justify-center gap-3">
							<button
								onClick={() => setPage(Math.max(1, page - 1))}
								disabled={page === 1}
								className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200 disabled:opacity-50 hover:border-emerald-400"
							>
								Previous
							</button>

							<span className="text-sm text-gray-400">
								Page {page} of {data.pagination.totalPages || 1}
							</span>

							<button
								onClick={() => setPage(page + 1)}
								disabled={page >= (data.pagination.totalPages || 1)}
								className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200 disabled:opacity-50 hover:border-sky-400"
							>
								Next
							</button>
						</div>
					)}
				</>
			)}
		</main>
	);
}
