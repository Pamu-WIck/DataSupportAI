import { Router } from "express";
import passport from "./passport";
import bcrypt from "bcrypt";
import { db } from "../db";
import { users, students } from "../../shared/schema";
import { eq } from "drizzle-orm";
import crypto from "crypto";

const router = Router();

/**
 * POST /api/auth/register
 * Register a new student account
 */
router.post("/register", async (req, res) => {
  try {
    const { email, password, name, schoolYear } = req.body;

    // Validation
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: "Email, password, and name are required"
      });
    }

    // Check if email already exists
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "An account with this email already exists"
      });
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

    res.status(201).json({
      success: true,
      message: "Account created successfully. You can now log in.",
      data: {
        email: newUser.email
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred during registration"
    });
  }
});

/**
 * POST /api/auth/login
 * Login with email and password
 */
router.post("/login", (req, res, next) => {
  console.log("=== Login Request ===");
  console.log("Body:", JSON.stringify(req.body, null, 2));

  passport.authenticate("local", async (err: any, user: any, info: any) => {
    if (err) {
      console.error("=== Login error ===");
      console.error("Error:", err);
      console.error("Stack:", err.stack);
      return res.status(500).json({
        success: false,
        message: "An error occurred during login",
        error: process.env.NODE_ENV === 'development' ? err.message : undefined,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
      });
    }

    if (!user) {
      console.log("=== Authentication failed ===");
      console.log("Info:", info);
      return res.status(401).json({
        success: false,
        message: info?.message || "Invalid credentials"
      });
    }

    console.log("=== Authentication successful ===");
    console.log("User:", user.email, "Role:", user.role);

    // Log the user in (create session)
    req.logIn(user, async (err) => {
      if (err) {
        console.error("=== Session creation error ===");
        console.error("Error:", err);
        return res.status(500).json({
          success: false,
          message: "An error occurred during session creation",
          error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
      }

      try {
        // Update last login timestamp
        await db
          .update(users)
          .set({ lastLogin: new Date() })
          .where(eq(users.id, user.id));

        // Get student profile if user is a student
        let studentProfile = null;
        if (user.role === 'student') {
          const [student] = await db
            .select()
            .from(students)
            .where(eq(students.userId, user.id))
            .limit(1);
          studentProfile = student || null;
        }

        console.log("=== Login complete ===");

        // Return user info
        res.json({
          success: true,
          message: "Login successful",
          data: {
            user: {
              id: user.id,
              email: user.email,
              role: user.role,
              studentProfile
            }
          }
        });
      } catch (dbErr) {
        console.error("=== Database error after login ===");
        console.error("Error:", dbErr);
        res.status(500).json({
          success: false,
          message: "Database error after authentication"
        });
      }
    });
  })(req, res, next);
});

/**
 * POST /api/auth/logout
 * Logout current user
 */
router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "An error occurred during logout"
      });
    }

    res.json({
      success: true,
      message: "Logout successful"
    });
  });
});

/**
 * GET /api/auth/me
 * Get current logged-in user
 */
router.get("/me", async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Not authenticated"
    });
  }

  const user = req.user as any;

  // Get student profile if user is a student
  let studentProfile = null;
  if (user.role === 'student') {
    const [student] = await db
      .select()
      .from(students)
      .where(eq(students.userId, user.id))
      .limit(1);
    studentProfile = student || null;
  }

  res.json({
    success: true,
    data: {
      user: {
        ...user,
        studentProfile
      }
    }
  });
});

/**
 * POST /api/auth/verify-email
 * Verify email with token
 */
router.post("/verify-email", async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Verification token is required"
      });
    }

    // Find user by verification token
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.verificationToken, token))
      .limit(1);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification token"
      });
    }

    // Mark as verified
    await db
      .update(users)
      .set({
        isVerified: true,
        verificationToken: null
      })
      .where(eq(users.id, user.id));

    res.json({
      success: true,
      message: "Email verified successfully. You can now log in."
    });
  } catch (error) {
    console.error("Email verification error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred during email verification"
    });
  }
});

// TODO: Add password reset routes
// POST /api/auth/forgot-password
// POST /api/auth/reset-password

export default router;
