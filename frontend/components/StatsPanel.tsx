'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ReviewStats {
	totalReviews: number;
	completedReviews: number;
	failedReviews: number;
	averageSuggestionsPerReview: number;
	acceptanceRate: number;
	recentTrend?: Array<{ date: string; count: number }>;
}

export function StatsPanel({ stats }: { stats: ReviewStats }) {
	return (
		<div className="space-y-6">
			{/* Key Metrics */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				<StatCard
					label="Total Reviews"
					value={stats.totalReviews}
					change={`${stats.completedReviews} completed`}
				/>
				<StatCard
					label="Failed"
					value={stats.failedReviews}
					change="See error logs"
					variant="danger"
				/>
				<StatCard
					label="Avg Suggestions"
					value={stats.averageSuggestionsPerReview.toFixed(1)}
					change="per review"
				/>
				<StatCard
					label="Acceptance Rate"
					value={`${(stats.acceptanceRate * 100).toFixed(0)}%`}
					change="developer approved"
					variant="success"
				/>
			</div>

			{/* Trend Chart */}
			{stats.recentTrend && stats.recentTrend.length > 0 && (
				<div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
					<h3 className="text-lg font-semibold mb-4">Review Trend (7 days)</h3>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={stats.recentTrend}>
							<CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
							<XAxis dataKey="date" stroke="#888" />
							<YAxis stroke="#888" />
							<Tooltip
								contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #444' }}
								labelStyle={{ color: '#fff' }}
							/>
							<Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
						</BarChart>
					</ResponsiveContainer>
				</div>
			)}
		</div>
	);
}

function StatCard({
	label,
	value,
	change,
	variant = 'default',
}: {
	label: string;
	value: string | number;
	change: string;
	variant?: 'default' | 'danger' | 'success';
}) {
	const variants = {
		default: 'bg-gray-900 border-gray-800',
		danger: 'bg-red-950 border-red-900',
		success: 'bg-green-950 border-green-900',
	};

	return (
		<div className={`p-4 rounded-lg border ${variants[variant]}`}>
			<div className="text-3xl font-bold mb-1">{value}</div>
			<div className="text-sm text-gray-400">{label}</div>
			<div className="text-xs text-gray-500 mt-2">{change}</div>
		</div>
	);
}
