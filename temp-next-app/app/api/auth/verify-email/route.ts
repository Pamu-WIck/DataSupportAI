import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { users } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({
        success: false,
        message: "Verification token is required"
      }, { status: 400 });
    }

    // Find user by verification token
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.verificationToken, token))
      .limit(1);

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Invalid or expired verification token"
      }, { status: 400 });
    }

    // Mark as verified
    await db
      .update(users)
      .set({
        isVerified: true,
        verificationToken: null
      })
      .where(eq(users.id, user.id));

    return NextResponse.json({
      success: true,
      message: "Email verified successfully. You can now log in."
    });
  } catch (error) {
    console.error("Email verification error:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred during email verification"
    }, { status: 500 });
  }
}
