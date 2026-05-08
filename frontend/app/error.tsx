'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="app-container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-semibold text-red-300 mb-3">Something went wrong</h2>
      <p className="max-w-md text-gray-400 mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-red-500/20 px-5 py-2 text-sm font-semibold text-red-200 hover:bg-red-500/30"
      >
        Try again
      </button>
    </div>
  );
}
