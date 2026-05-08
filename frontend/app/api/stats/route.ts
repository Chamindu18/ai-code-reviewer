import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const backendUrl =
    process.env.BACKEND_URL ||
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    'http://localhost:3001';
  const authHeader = request.headers.get('authorization') || '';

  const res = await fetch(`${backendUrl}/api/stats`, {
    headers: { Authorization: authHeader || `Bearer ${process.env.API_SECRET}` },
    cache: 'no-store',
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: res.status });
  }

  return NextResponse.json(await res.json());
}
