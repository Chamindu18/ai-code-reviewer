const BASE = '/api';   // All requests go through Next.js proxy routes

// Fetch paginated reviews
export async function getReviews(page = 1) {
  const res = await fetch(`${BASE}/reviews?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch reviews');
  return res.json();   // returns { data: [...], pagination: {...} }
}

// Fetch a single review with its suggestions
export async function getReview(id: string) {
  const res = await fetch(`${BASE}/reviews/${id}`);
  if (!res.ok) throw new Error('Failed to fetch review');
  return res.json();
}

// Submit feedback (accepted / rejected) on a suggestion
export async function submitFeedback(suggestionId: number, feedback: 'accepted' | 'rejected') {
  const res = await fetch(`${BASE}/feedback/${suggestionId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ feedback }),
  });
  if (!res.ok) throw new Error('Failed to submit feedback');
  return res.json();   // { success: true }
}