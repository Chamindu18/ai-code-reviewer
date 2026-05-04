const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';
const API_SECRET = process.env.API_SECRET;

// Helper to construct absolute URLs for server-side fetches
function getAbsoluteUrl(path: string) {
  return `${BACKEND_URL}${path}`;
}

// Fetch paginated reviews
export async function getReviews(page = 1) {
  const res = await fetch(getAbsoluteUrl(`/api/reviews?page=${page}`), {
    headers: API_SECRET ? { Authorization: `Bearer ${API_SECRET}` } : {},
  });
  if (!res.ok) throw new Error('Failed to fetch reviews');
  return res.json();   // returns { data: [...], pagination: {...} }
}

// Fetch a single review with its suggestions
export async function getReview(id: string) {
  const res = await fetch(getAbsoluteUrl(`/api/reviews/${id}`), {
    headers: API_SECRET ? { Authorization: `Bearer ${API_SECRET}` } : {},
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch review');
  return res.json();
}

// Submit feedback (accepted / rejected) on a suggestion
export async function submitFeedback(suggestionId: number, feedback: 'accepted' | 'rejected') {
  const res = await fetch(getAbsoluteUrl(`/api/feedback/${suggestionId}`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(API_SECRET ? { Authorization: `Bearer ${API_SECRET}` } : {}),
    },
    body: JSON.stringify({ feedback }),
  });
  if (!res.ok) throw new Error('Failed to submit feedback');
  return res.json();   // { success: true }
}