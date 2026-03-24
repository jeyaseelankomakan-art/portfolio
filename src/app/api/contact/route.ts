import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(contactMessage, { status: 201 });
  } catch (error) {
    console.error('Contact error:', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
