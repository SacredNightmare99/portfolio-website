import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createSession, destroySession } from "@/app/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { password, action } = await req.json();

    // Logout
    if (action === "logout") {
      await destroySession();
      return NextResponse.json({ success: true });
    }

    // Login
    if (!password) {
      return NextResponse.json(
        { error: "Password required" },
        { status: 400 }
      );
    }

    const valid = await verifyPassword(password);
    if (!valid) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    await createSession();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
