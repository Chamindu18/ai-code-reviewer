'use client';

import { useState } from 'react';
import { submitFeedback } from '@/lib/api';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface FeedbackButtonProps {
	suggestionId: number;
	currentFeedback?: 'accepted' | 'rejected';
	onFeedbackSubmitted?: (feedback: 'accepted' | 'rejected') => void;
}

export function FeedbackButton({
	suggestionId,
	currentFeedback,
	onFeedbackSubmitted,
}: FeedbackButtonProps) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [feedback, setFeedback] = useState<'accepted' | 'rejected' | null>(currentFeedback || null);

	const handleFeedback = async (value: 'accepted' | 'rejected') => {
		setLoading(true);
		setError(null);

		try {
			await submitFeedback(suggestionId, value);
			setFeedback(value);
			onFeedbackSubmitted?.(value);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to submit feedback');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex items-center gap-2">
			<span className="text-sm text-gray-400">Was this helpful?</span>
      
			<button
				onClick={() => handleFeedback('accepted')}
				disabled={loading}
				className={`p-2 rounded transition ${
					feedback === 'accepted'
						? 'bg-green-900 text-green-300'
						: 'bg-gray-800 text-gray-400 hover:bg-green-900'
				} disabled:opacity-50`}
				title="Accept - This suggestion was helpful"
			>
				<ThumbsUp size={16} />
			</button>

			<button
				onClick={() => handleFeedback('rejected')}
				disabled={loading}
				className={`p-2 rounded transition ${
					feedback === 'rejected'
						? 'bg-red-900 text-red-300'
						: 'bg-gray-800 text-gray-400 hover:bg-red-900'
				} disabled:opacity-50`}
				title="Reject - This suggestion wasn't helpful"
			>
				<ThumbsDown size={16} />
			</button>

			{error && <span className="text-sm text-red-400">{error}</span>}
		</div>
	);
}
