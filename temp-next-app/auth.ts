import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/server/db";
import { users, students } from "@shared/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email as string))
          .limit(1);

        if (!user || !user.passwordHash) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.passwordHash
        );

        if (isValid) {
          return { id: user.id.toString(), email: user.email, role: user.role };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;

        if (session.user.role === "student") {
          const [student] = await db
            .select()
            .from(students)
            .where(eq(students.userId, parseInt(session.user.id)))
            .limit(1);
          (session.user as any).studentProfile = student || null;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
