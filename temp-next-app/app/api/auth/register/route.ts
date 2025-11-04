import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "@/server/db";
import { users, students } from "@shared/schema";
import { eq } from "drizzle-orm";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const { email, password, name, schoolYear } = await request.json();

    // Validation
    if (!email || !password || !name) {
      return NextResponse.json({
        success: false,
        message: "Email, password, and name are required"
      }, { status: 400 });
    }

    // Check if email already exists
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "An account with this email already exists"
      }, { status: 400 });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Create user
    const [newUser] = await db
      .insert(users)
      .values({
        email,
        passwordHash,
        role: "student",
        isVerified: true, // Auto-verify for now (set to false for production with email verification)
        verificationToken: null, // Set to verificationToken for production
      })
      .returning();

    // Create student profile
    await db.insert(students).values({
      userId: newUser.id,
      name,
      email,
      passwordHash: null, // Not using this field anymore
      avatarUrl: null,
      schoolYear: schoolYear || null,
      totalPoints: 0,
      streak: 0,
    });

    // TODO: Send verification email
    // await sendVerificationEmail(email, verificationToken);

    return NextResponse.json({
      success: true,
      message: "Account created successfully. You can now log in.",
      data: {
        email: newUser.email
      }
    }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred during registration"
    }, { status: 500 });
  }
}
