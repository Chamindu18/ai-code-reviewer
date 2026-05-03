import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Read the 'page' query parameter from the URL
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';

  // Forward the request to the real backend, including the secret API key
  const res = await fetch(`${process.env.BACKEND_URL}/api/reviews?page=${page}`, {
    headers: { Authorization: `Bearer ${process.env.API_SECRET}` },
    cache: 'no-store',
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }

  return NextResponse.json(await res.json());
}