import Link from 'next/link';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface ReviewCardProps {
	id: number;
	prTitle?: string;
	prNumber: number;
	prAuthor?: string;
	status: 'pending' | 'processing' | 'completed' | 'failed' | 'partial';
	suggestionCount: number;
	repoFullName?: string;
	createdAt?: string;
}

export function ReviewCard({
	id,
	prTitle,
	prNumber,
	prAuthor,
	status,
	suggestionCount,
	repoFullName,
	createdAt,
}: ReviewCardProps) {
	const statusConfig = {
		pending: { icon: Clock, color: 'text-yellow-400', bg: 'bg-yellow-950' },
		processing: { icon: Clock, color: 'text-blue-400', bg: 'bg-blue-950' },
		completed: { icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-950' },
		failed: { icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-950' },
		partial: { icon: AlertCircle, color: 'text-orange-400', bg: 'bg-orange-950' },
	};

	const config = statusConfig[status];
	const StatusIcon = config.icon;

	return (
		<Link href={`/reviews/${id}`} className="group">
			<div className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-blue-500 transition-all hover:shadow-lg">
				<div className="flex justify-between items-start mb-3">
					<div className="flex-1">
						<h3 className="font-semibold text-lg text-gray-100 group-hover:text-blue-400 transition">
							{prTitle || `PR #${prNumber}`}
						</h3>
						{prAuthor && (
							<p className="text-sm text-gray-500">
								by <span className="text-gray-400">{prAuthor}</span>
							</p>
						)}
					</div>

					<div className={`px-3 py-1 rounded flex items-center gap-1 ${config.bg}`}>
						<StatusIcon size={14} className={config.color} />
						<span className={`text-xs font-medium ${config.color}`}>
							{status.charAt(0).toUpperCase() + status.slice(1)}
						</span>
					</div>
				</div>

				<div className="flex items-center justify-between text-sm text-gray-400">
					{repoFullName && (
						<span className="font-mono text-xs bg-gray-800 px-2 py-1 rounded">
							{repoFullName}
						</span>
					)}
					<span className="font-semibold text-blue-400">{suggestionCount} suggestions</span>
				</div>

				{createdAt && (
					<p className="text-xs text-gray-500 mt-2">
						{new Date(createdAt).toLocaleDateString()}
					</p>
				)}
			</div>
		</Link>
	);
}
