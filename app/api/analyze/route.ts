import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Read the JSON body sent from the frontend
  const { url } = await request.json();

  // For now, we just return fake data to prove it works
  const fakeProduct = {
    source: 'demo',
    url,
    title: 'Demo Product from API',
    price: 42.0,
    currency: 'USD',
    materials: '100% imagination',
    description: 'This is a fake product response from your /api/analyze route.',
    sizes: ['XS', 'S', 'M', 'L'],
  };

  return NextResponse.json(fakeProduct);
}
