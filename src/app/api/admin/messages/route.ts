import { NextResponse } from "next/server";
import { messagesStore } from "@/lib/store";

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

    // Fetch all messages from the in-memory store, newest first
    const messages = [...messagesStore].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { password, id } = body;

    // Check admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD || "komakan123";
    if (password !== adminPassword) {
      return new NextResponse("Unauthorized. Invalid Password.", {
        status: 401,
      });
    }

    const index = messagesStore.findIndex((msg) => msg.id === id);
    if (index !== -1) {
      messagesStore.splice(index, 1);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete message:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
