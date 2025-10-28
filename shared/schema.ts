import { pgTable, text, serial, integer, boolean, timestamp, unique, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Authentication - Users table (central authentication for all user types)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").notNull().default("student"), // student, teacher, admin, super_admin
  isVerified: boolean("is_verified").default(false),
  verificationToken: text("verification_token"),
  resetPasswordToken: text("reset_password_token"),
  resetPasswordExpires: timestamp("reset_password_expires"),
  lastLogin: timestamp("last_login"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  passwordHash: true,
  role: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Sessions table (PostgreSQL session store for connect-pg-simple)
export const sessions = pgTable("sessions", {
  sid: text("sid").primaryKey(),
  sess: jsonb("sess").notNull(),
  expire: timestamp("expire").notNull(),
});

// Activity logs table (audit trail for security)
export const activityLogs = pgTable("activity_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  action: text("action").notNull(), // login, logout, create, update, delete, etc.
  resource: text("resource"), // papers, students, badges, etc.
  resourceId: integer("resource_id"),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertActivityLogSchema = createInsertSchema(activityLogs).pick({
  userId: true,
  action: true,
  resource: true,
  resourceId: true,
  ipAddress: true,
  userAgent: true,
});

export type InsertActivityLog = z.infer<typeof insertActivityLogSchema>;
export type ActivityLog = typeof activityLogs.$inferSelect;

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  email: true, 
  subject: true,
  message: true,
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: text("created_at").notNull(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

// Gamification - Students
export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: 'cascade' }).unique(), // Link to users table
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash"), // Deprecated - keeping for backwards compatibility, use users.passwordHash instead
  avatarUrl: text("avatar_url"),
  schoolYear: integer("school_year"), // 7-13 for UK system
  totalPoints: integer("total_points").default(0).notNull(),
  streak: integer("streak").default(0).notNull(),
  lastActive: timestamp("last_active").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertStudentSchema = createInsertSchema(students).pick({
  userId: true,
  name: true,
  email: true,
  avatarUrl: true,
  schoolYear: true,
});

export type InsertStudent = z.infer<typeof insertStudentSchema>;
export type Student = typeof students.$inferSelect;

// Badges definition
export const badges = pgTable("badges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(), // e.g., achievement, progress, subject
  level: integer("level").default(1).notNull(), // 1=bronze, 2=silver, 3=gold
  pointsAwarded: integer("points_awarded").default(10).notNull(),
  requirements: text("requirements").notNull(), // Description of how to earn the badge
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBadgeSchema = createInsertSchema(badges).pick({
  name: true,
  description: true,
  imageUrl: true,
  category: true,
  level: true,
  pointsAwarded: true,
  requirements: true,
});

export type InsertBadge = z.infer<typeof insertBadgeSchema>;
export type Badge = typeof badges.$inferSelect;

// Student-Badge relationship
export const studentBadges = pgTable("student_badges", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").notNull().references(() => students.id, { onDelete: 'cascade' }),
  badgeId: integer("badge_id").notNull().references(() => badges.id, { onDelete: 'cascade' }),
  earnedAt: timestamp("earned_at").defaultNow().notNull(),
}, (t) => ({
  unq: unique().on(t.studentId, t.badgeId),
}));

export const insertStudentBadgeSchema = createInsertSchema(studentBadges).pick({
  studentId: true,
  badgeId: true,
});

export type InsertStudentBadge = z.infer<typeof insertStudentBadgeSchema>;
export type StudentBadge = typeof studentBadges.$inferSelect;

// Paper completion tracking
export const paperCompletions = pgTable("paper_completions", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").notNull().references(() => students.id, { onDelete: 'cascade' }),
  examBoard: text("exam_board").notNull(),
  subject: text("subject").notNull(),
  paperIdentifier: text("paper_identifier").notNull(), // e.g., "AQA-GCSE-Biology-Paper1-2022-Summer"
  score: integer("score"), // Optional student-entered score
  maxScore: integer("max_score"), // Maximum possible score on the paper
  completedAt: timestamp("completed_at").defaultNow().notNull(),
  pointsEarned: integer("points_earned").default(0).notNull(),
  notes: text("notes"), // Study notes generated for this paper
}, (t) => ({
  unq: unique().on(t.studentId, t.paperIdentifier),
}));

export const insertPaperCompletionSchema = createInsertSchema(paperCompletions)
  .pick({
    studentId: true,
    examBoard: true,
    subject: true,
    paperIdentifier: true,
    score: true,
    maxScore: true,
    pointsEarned: true,
    notes: true,
  })
  .extend({
    pointsEarned: z.number().default(0), // Ensure pointsEarned is always provided with a default
    notes: z.string().optional(),
  });

export type InsertPaperCompletion = z.infer<typeof insertPaperCompletionSchema>;
export type PaperCompletion = typeof paperCompletions.$inferSelect;

// Track YouTube lesson completions
export const videoCompletions = pgTable("video_completions", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").notNull().references(() => students.id, { onDelete: 'cascade' }),
  videoId: text("video_id").notNull(), // YouTube video ID
  videoTitle: text("video_title").notNull(),
  subject: text("subject").notNull(), // Biology, Chemistry, Physics
  topic: text("topic"), // Specific topic within the subject
  watchedPercentage: integer("watched_percentage").default(100).notNull(),
  completedAt: timestamp("completed_at").defaultNow().notNull(),
  pointsEarned: integer("points_earned").default(25).notNull(), // Default points for watching a video
}, (t) => ({
  unq: unique().on(t.studentId, t.videoId), // Each student can only get points once per video
}));

export const insertVideoCompletionSchema = createInsertSchema(videoCompletions)
  .pick({
    studentId: true,
    videoId: true,
    videoTitle: true,
    subject: true,
    topic: true,
    watchedPercentage: true,
    pointsEarned: true,
  })
  .extend({
    pointsEarned: z.number().default(25), // Ensure pointsEarned is always provided with a default
  });

export type InsertVideoCompletion = z.infer<typeof insertVideoCompletionSchema>;
export type VideoCompletion = typeof videoCompletions.$inferSelect;
