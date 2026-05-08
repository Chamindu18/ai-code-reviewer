'use client';

import { useState } from 'react';

interface DiffLine {
	type: 'added' | 'removed' | 'context';
	content: string;
	lineNumber?: number;
}

export function DiffViewer({ filePath, diff }: { filePath: string; diff: string }) {
	const [expanded, setExpanded] = useState(false);

	const lines = diff.split('\n').map((line) => {
		if (line.startsWith('+') && !line.startsWith('+++')) {
			return { type: 'added' as const, content: line.slice(1) };
		} else if (line.startsWith('-') && !line.startsWith('---')) {
			return { type: 'removed' as const, content: line.slice(1) };
		}
		return { type: 'context' as const, content: line };
	});

	const displayLines = expanded ? lines : lines.slice(0, 5);
	const hasMore = lines.length > 5 && !expanded;

	return (
		<div className="bg-gray-950 rounded-lg border border-gray-800 font-mono text-sm overflow-hidden">
			<div className="bg-gray-900 px-4 py-2 border-b border-gray-800 font-semibold text-gray-300">
				📄 {filePath}
			</div>

			<div className="overflow-x-auto">
				{displayLines.map((line, idx) => (
					<div
						key={idx}
						className={`px-4 py-1 ${
							line.type === 'added'
								? 'bg-green-950 text-green-200'
								: line.type === 'removed'
									? 'bg-red-950 text-red-200'
									: 'bg-gray-900 text-gray-400'
						}`}
					>
						<span className="text-gray-600">{line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' '}</span>
						{line.content}
					</div>
				))}
			</div>

			{hasMore && (
				<button
					onClick={() => setExpanded(true)}
					className="w-full py-2 text-sm text-blue-400 hover:text-blue-300 bg-gray-900 border-t border-gray-800 transition"
				>
					Show {lines.length - 5} more lines
				</button>
			)}
		</div>
	);
}
