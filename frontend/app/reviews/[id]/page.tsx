import { getReview } from '@/lib/api';
import { notFound } from 'next/navigation';

export default async function ReviewPage({ params }: { params: { id: string } }) {
  const review = await getReview(params.id);
  if (!review) notFound();   // triggers the 404 page

  return (
    <main className="max-w-4xl mx-auto p-8">
      {/* PR info */}
      <h1 className="text-2xl font-bold mb-2">
        {review.prTitle || `PR #${review.prNumber}`}
      </h1>
      <p className="text-gray-400 mb-6">
        {review.repo?.fullName} by {review.prAuthor}
      </p>

      {/* Show error if the review failed */}
      {review.errorMessage && (
        <div className="p-4 mb-6 bg-red-950 border border-red-900 rounded text-red-200">
          Error: {review.errorMessage}
        </div>
      )}

      {/* Suggestions list */}
      <div className="space-y-4">
        {review.suggestions?.map((s: any) => (
          <div key={s.id} className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <SeverityDot severity={s.severity} />
              <span className="text-sm font-mono text-gray-400">
                {s.filePath}:{s.lineNumber}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-300">
                {s.category}
              </span>
            </div>
            <h3 className="font-semibold mb-1">{s.message}</h3>
            <p className="text-gray-300 text-sm mb-3">{s.explanation}</p>
            {/* You can later add the FeedbackButton component here */}
          </div>
        ))}
      </div>
    </main>
  );
}

// Severity dot component
function SeverityDot({ severity }: { severity: string }) {
  const colors: Record<string, string> = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500',
  };
  return <div className={`w-2 h-2 rounded-full ${colors[severity] || 'bg-gray-500'}`} />;
}