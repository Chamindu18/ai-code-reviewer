const BACKEND_URL =
  process.env.BACKEND_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  'http://localhost:3001';
const API_SECRET = process.env.API_SECRET;

// Helper to construct absolute URLs for server-side fetches
function getAbsoluteUrl(path: string) {
  return `${BACKEND_URL}${path}`;
}

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 3,
) {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < retries; attempt += 1) {
    try {
      const res = await fetch(url, options);
      if (res.ok) return res;
      if (res.status >= 500) {
        lastError = new Error(`API Error (${res.status}): Server error`);
        continue;
      }
      return res;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Network error');
    }

    if (attempt < retries - 1) {
      const delayMs = Math.pow(2, attempt) * 100;
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  throw lastError ?? new Error('Failed after retries');
}

async function getErrorMessage(res: Response, fallback: string) {
  try {
    const errorData = await res.json();
    return `API Error (${res.status}): ${errorData?.error || fallback}`;
  } catch {
    return `API Error (${res.status}): ${fallback}`;
  }
}

// Fetch paginated reviews
export async function getReviews(page = 1) {
  const res = await fetchWithRetry(getAbsoluteUrl(`/api/reviews?page=${page}`), {
    headers: API_SECRET ? { Authorization: `Bearer ${API_SECRET}` } : {},
  });
  if (!res.ok) throw new Error(await getErrorMessage(res, 'Failed to fetch reviews'));
  return res.json();   // returns { data: [...], pagination: {...} }
}

// Fetch a single review with its suggestions
export async function getReview(id: string) {
  const res = await fetchWithRetry(getAbsoluteUrl(`/api/reviews/${id}`), {
    headers: API_SECRET ? { Authorization: `Bearer ${API_SECRET}` } : {},
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(await getErrorMessage(res, 'Failed to fetch review'));
  return res.json();
}

// Submit feedback (accepted / rejected) on a suggestion
export async function submitFeedback(suggestionId: number, feedback: 'accepted' | 'rejected') {
  const res = await fetchWithRetry(getAbsoluteUrl(`/api/feedback/${suggestionId}`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(API_SECRET ? { Authorization: `Bearer ${API_SECRET}` } : {}),
    },
    body: JSON.stringify({ feedback }),
  });
  if (!res.ok) throw new Error(await getErrorMessage(res, 'Failed to submit feedback'));
  return res.json();   // { success: true }
}

export async function getStats() {
  const res = await fetchWithRetry(getAbsoluteUrl('/api/stats'), {
    headers: API_SECRET ? { Authorization: `Bearer ${API_SECRET}` } : {},
  });
  if (!res.ok) throw new Error(await getErrorMessage(res, 'Failed to fetch stats'));
  return res.json();
}