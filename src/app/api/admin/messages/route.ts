import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    // Check admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD || "komakan123";
    if (password !== adminPassword) {
      return new NextResponse("Unauthorized. Invalid Password.", {
        status: 401,
      });
    }

    // Fetch all messages from the database, newest first
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
