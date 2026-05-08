import { getReview } from '@/lib/api';
import { FeedbackButton } from '@/components/FeedbackButton';
import { notFound } from 'next/navigation';

interface Suggestion {
  id: number;
  filePath: string;
  lineNumber: number;
  category: string;
  severity: string;
  message: string;
  explanation: string;
  feedback?: string;
}

interface ReviewDetail {
  id: number;
  repoId: number;
  prNumber: number;
  prTitle?: string;
  prAuthor: string;
  githubDelivery?: string;
  status: string;
  errorMessage?: string | null;
  createdAt?: string;
  completedAt?: string | null;
  repo?: { fullName?: string };
  suggestions?: Suggestion[];
}

export default async function ReviewPage({ params }: { params: { id: string } }) {
  const review: ReviewDetail | null = await getReview(params.id);
  if (!review) notFound();   // triggers the 404 page

  const suggestions = review.suggestions || [];
  const acceptedCount = suggestions.filter((s) => s.feedback === 'accepted').length;
  const rejectedCount = suggestions.filter((s) => s.feedback === 'rejected').length;
  const feedbackTotal = acceptedCount + rejectedCount;
  const acceptanceRate = feedbackTotal === 0 ? 0 : Math.round((acceptedCount / feedbackTotal) * 100);

  const groupedSuggestions = suggestions.reduce((acc, suggestion) => {
    const key = suggestion.filePath || 'Unknown file';
    if (!acc[key]) acc[key] = [];
    acc[key].push(suggestion);
    return acc;
  }, {} as Record<string, Suggestion[]>);

  const reviewUrl = review.repo?.fullName
    ? `https://github.com/${review.repo.fullName}/pull/${review.prNumber}`
    : null;

  return (
    <main className="app-container py-10">
      <section className="glass-panel rounded-3xl p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/70">Review detail</p>
            <h1 className="mt-2 text-3xl font-semibold">
              {review.prTitle || `PR #${review.prNumber}`}
            </h1>
            <p className="text-gray-400">
              {review.repo?.fullName} by {review.prAuthor}
            </p>
            {reviewUrl && (
              <a
                href={reviewUrl}
                className="mt-3 inline-flex items-center gap-2 text-sm text-sky-200 hover:text-sky-100"
              >
                Open pull request
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="rounded-2xl border border-gray-800/80 bg-gray-950/70 px-4 py-3 text-sm text-gray-300">
              Status: <span className="text-emerald-200">{review.status}</span>
            </div>
            <div className="rounded-2xl border border-gray-800/80 bg-gray-950/70 px-4 py-3 text-sm text-gray-300">
              Suggestions: <span className="text-emerald-200">{suggestions.length}</span>
            </div>
            <div className="rounded-2xl border border-gray-800/80 bg-gray-950/70 px-4 py-3 text-sm text-gray-300">
              Acceptance rate: <span className="text-emerald-200">{acceptanceRate}%</span>
            </div>
          </div>
        </div>

        {review.errorMessage && (
          <div className="mt-6 rounded-2xl border border-red-900/60 bg-red-950/60 p-4 text-red-200">
            Error: {review.errorMessage}
          </div>
        )}
      </section>

      <section className="mt-10 space-y-6">
        {Object.keys(groupedSuggestions).length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-700 p-8 text-center text-gray-400">
            No suggestions were generated for this review.
          </div>
        ) : (
          Object.entries(groupedSuggestions).map(([filePath, suggestionsForFile]) => (
            <div key={filePath} className="rounded-3xl border border-gray-800/70 bg-gray-950/60 p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{filePath}</h2>
                  <p className="text-sm text-gray-400">
                    {suggestionsForFile.length} suggestion{suggestionsForFile.length === 1 ? '' : 's'}
                  </p>
                </div>
                <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300">
                  Feedback: {acceptedCount} accepted, {rejectedCount} rejected
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {suggestionsForFile.map((s) => (
                  <div key={s.id} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
                      <SeverityDot severity={s.severity} />
                      <span className="font-mono">
                        {s.filePath}:{s.lineNumber}
                      </span>
                      <span className="rounded-full bg-gray-800 px-2 py-0.5 text-gray-300">
                        {s.category}
                      </span>
                      <span className="rounded-full bg-gray-800 px-2 py-0.5 text-gray-300">
                        {s.severity} severity
                      </span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-gray-100">{s.message}</h3>
                    <p className="mt-2 text-sm text-gray-300">{s.explanation}</p>
                    <div className="mt-4 border-t border-gray-800 pt-4">
                      <FeedbackButton
                        suggestionId={s.id}
                        currentFeedback={s.feedback as 'accepted' | 'rejected' | undefined}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
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