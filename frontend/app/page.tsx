import Link from 'next/link';
import { getReviews } from '@/lib/api';   // server component can directly call the proxy

export default async function HomePage() {
  // Fetch the first page of reviews (this runs on the server at request time)
  const data = await getReviews();

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">🤖 AI Code Review Dashboard</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Total Reviews" value={data.pagination.total} />
        <StatCard label="This Page" value={data.data.length} />
        <StatCard label="Status" value="Live" />
      </div>

      {/* List of reviews */}
      <div className="space-y-4">
        {data.data.map((review: any) => (
          <Link
            key={review.id}
            href={`/reviews/${review.id}`}
            className="block p-4 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-600 transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">
                {review.prTitle || `PR #${review.prNumber}`}
              </h2>
              <StatusBadge status={review.status} />
            </div>
            <p className="text-sm text-gray-400 mt-1">
              {review.repo?.fullName} • {review._count?.suggestions} suggestions
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

// Simple stat card component
function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

// Status badge (color‑coded)
function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    completed: 'bg-green-900 text-green-300',
    failed: 'bg-red-900 text-red-300',
    processing: 'bg-yellow-900 text-yellow-300',
  };
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${colors[status] || 'bg-gray-800'}`}>
      {status}
    </span>
  );
}