import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const authHeader = request.headers.get('authorization') || '';
  const res = await fetch(`${process.env.BACKEND_URL}/api/reviews/${params.id}`, {
    headers: { Authorization: authHeader || `Bearer ${process.env.API_SECRET}` },
    cache: 'no-store',
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch review' },
      { status: res.status }
    );
  }

  return NextResponse.json(await res.json());
}
