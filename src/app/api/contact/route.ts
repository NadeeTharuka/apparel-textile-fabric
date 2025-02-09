import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Here you would typically:
    // 1. Validate the input
    // 2. Send email using your preferred email service
    // 3. Store in database if needed

    // For now, we'll just return a success response
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    );
  }
}
