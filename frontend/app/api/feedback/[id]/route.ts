import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }   // The dynamic [id] from the URL
) {
  const body = await request.json();   // read the feedback from the request body

  // Proxy the POST to the backend
  const res = await fetch(`${process.env.BACKEND_URL}/api/feedback/${params.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_SECRET}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to submit feedback' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}