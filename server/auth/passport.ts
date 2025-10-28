import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import { db } from "../db";
import { users } from "../../shared/schema";
import { eq } from "drizzle-orm";

// Configure local strategy (email + password)
passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // Use email instead of username
      passwordField: "password"
    },
    async (email, password, done) => {
      try {
        console.log("Login attempt for:", email);

        // Find user by email
        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, email))
          .limit(1);

        console.log("User found:", user ? `Yes (ID: ${user.id})` : "No");

        if (!user) {
          return done(null, false, { message: "Incorrect email or password" });
        }

        // Check if account is active
        if (!user.isActive) {
          return done(null, false, { message: "Account has been deactivated" });
        }

        // Check if email is verified (commented out for initial testing - uncomment for production)
        // if (!user.isVerified) {
        //   return done(null, false, { message: "Please verify your email address" });
        // }

        // Compare password with hash
        console.log("Comparing passwords...");
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        console.log("Password match:", isMatch);

        if (!isMatch) {
          return done(null, false, { message: "Incorrect email or password" });
        }

        // Success - return user object (without password hash)
        const { passwordHash, ...userWithoutPassword } = user;
        console.log("Authentication successful for user:", userWithoutPassword.email);
        return done(null, userWithoutPassword);
      } catch (error) {
        console.error("Passport strategy error:", error);
        return done(error);
      }
    }
  )
);

// Serialize user to session (store user ID)
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

// Deserialize user from session (load full user object)
passport.deserializeUser(async (id: number, done) => {
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);

    if (!user) {
      return done(null, false);
    }

    // Return user without password hash
    const { passwordHash, ...userWithoutPassword } = user;
    done(null, userWithoutPassword);
  } catch (error) {
    done(error);
  }
});

export default passport;
