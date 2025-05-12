import { pgTable, text, serial, integer, boolean, timestamp, unique } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

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
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(), 
  avatarUrl: text("avatar_url"),
  schoolYear: integer("school_year"), // 7-13 for UK system
  totalPoints: integer("total_points").default(0).notNull(),
  streak: integer("streak").default(0).notNull(),
  lastActive: timestamp("last_active").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertStudentSchema = createInsertSchema(students).pick({
  name: true,
  email: true,
  passwordHash: true,
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
  })
  .extend({
    pointsEarned: z.number().default(0), // Ensure pointsEarned is always provided with a default
  });

export type InsertPaperCompletion = z.infer<typeof insertPaperCompletionSchema>;
export type PaperCompletion = typeof paperCompletions.$inferSelect;
