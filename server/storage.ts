import { 
  users, 
  type User, 
  type InsertUser,
  inquiries,
  type Inquiry,
  type InsertInquiry,
  subscribers,
  type Subscriber,
  type InsertSubscriber,
  students, type Student, type InsertStudent,
  badges, type Badge, type InsertBadge,
  studentBadges, type StudentBadge, type InsertStudentBadge,
  paperCompletions, type PaperCompletion, type InsertPaperCompletion
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, sql } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Inquiry methods
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getAllInquiries(): Promise<Inquiry[]>;
  
  // Subscriber methods
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Student methods
  getStudent(id: number): Promise<Student | undefined>;
  getStudentByEmail(email: string): Promise<Student | undefined>;
  createStudent(student: InsertStudent): Promise<Student>;
  updateStudentPoints(id: number, pointsToAdd: number): Promise<Student>;
  updateStudentStreak(id: number): Promise<Student>;
  getTopStudents(limit?: number): Promise<Student[]>;
  
  // Badge methods
  getBadge(id: number): Promise<Badge | undefined>;
  getAllBadges(): Promise<Badge[]>;
  createBadge(badge: InsertBadge): Promise<Badge>;
  
  // Student-Badge methods
  awardBadgeToStudent(studentBadge: InsertStudentBadge): Promise<StudentBadge>;
  getStudentBadges(studentId: number): Promise<Badge[]>;
  hasStudentEarnedBadge(studentId: number, badgeId: number): Promise<boolean>;
  
  // Paper completion methods
  recordPaperCompletion(completion: InsertPaperCompletion): Promise<PaperCompletion>;
  getStudentCompletedPapers(studentId: number): Promise<PaperCompletion[]>;
  getPaperCompletionStats(): Promise<{subject: string, completionCount: number}[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Inquiry methods
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const createdAt = new Date().toISOString();
    const [inquiry] = await db.insert(inquiries).values({
      ...insertInquiry,
      createdAt
    }).returning();
    return inquiry;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return db.select().from(inquiries);
  }

  // Subscriber methods
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const createdAt = new Date().toISOString();
    const [subscriber] = await db.insert(subscribers).values({
      ...insertSubscriber,
      createdAt
    }).returning();
    return subscriber;
  }

  // Student methods
  async getStudent(id: number): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.id, id));
    return student;
  }

  async getStudentByEmail(email: string): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.email, email));
    return student;
  }

  async createStudent(insertStudent: InsertStudent): Promise<Student> {
    const [student] = await db.insert(students).values(insertStudent).returning();
    return student;
  }

  async updateStudentPoints(id: number, pointsToAdd: number): Promise<Student> {
    const [student] = await db
      .update(students)
      .set({
        totalPoints: sql`${students.totalPoints} + ${pointsToAdd}`,
        lastActive: new Date()
      })
      .where(eq(students.id, id))
      .returning();
    return student;
  }

  async updateStudentStreak(id: number): Promise<Student> {
    const student = await this.getStudent(id);
    if (!student) throw new Error("Student not found");

    // Check if last active was yesterday or today
    const lastActive = new Date(student.lastActive);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const isYesterday = 
      lastActive.getDate() === yesterday.getDate() && 
      lastActive.getMonth() === yesterday.getMonth() && 
      lastActive.getFullYear() === yesterday.getFullYear();

    const isToday = 
      lastActive.getDate() === today.getDate() && 
      lastActive.getMonth() === today.getMonth() && 
      lastActive.getFullYear() === today.getFullYear();

    let streakIncrement = 0;
    if (isYesterday) {
      // Continue streak
      streakIncrement = 1;
    } else if (!isToday) {
      // Reset streak if not yesterday and not today
      streakIncrement = 1 - student.streak; // Reset to 1
    }

    const [updatedStudent] = await db
      .update(students)
      .set({
        streak: sql`${students.streak} + ${streakIncrement}`,
        lastActive: new Date()
      })
      .where(eq(students.id, id))
      .returning();
    
    return updatedStudent;
  }

  async getTopStudents(limit: number = 10): Promise<Student[]> {
    return db
      .select()
      .from(students)
      .orderBy(desc(students.totalPoints))
      .limit(limit);
  }

  // Badge methods
  async getBadge(id: number): Promise<Badge | undefined> {
    const [badge] = await db.select().from(badges).where(eq(badges.id, id));
    return badge;
  }

  async getAllBadges(): Promise<Badge[]> {
    return db.select().from(badges);
  }

  async createBadge(insertBadge: InsertBadge): Promise<Badge> {
    const [badge] = await db.insert(badges).values(insertBadge).returning();
    return badge;
  }

  // Student-Badge methods
  async awardBadgeToStudent(insertStudentBadge: InsertStudentBadge): Promise<StudentBadge> {
    // Check if already awarded
    const exists = await this.hasStudentEarnedBadge(
      insertStudentBadge.studentId, 
      insertStudentBadge.badgeId
    );
    
    if (exists) {
      throw new Error("Student already has this badge");
    }

    // Award badge
    const [studentBadge] = await db
      .insert(studentBadges)
      .values(insertStudentBadge)
      .returning();
    
    // Update student points
    const badge = await this.getBadge(insertStudentBadge.badgeId);
    if (badge) {
      await this.updateStudentPoints(insertStudentBadge.studentId, badge.pointsAwarded);
    }
    
    return studentBadge;
  }

  async getStudentBadges(studentId: number): Promise<Badge[]> {
    const studentBadgesWithData = await db
      .select({
        badge: badges
      })
      .from(studentBadges)
      .innerJoin(badges, eq(studentBadges.badgeId, badges.id))
      .where(eq(studentBadges.studentId, studentId));
    
    return studentBadgesWithData.map(item => item.badge);
  }

  async hasStudentEarnedBadge(studentId: number, badgeId: number): Promise<boolean> {
    const [result] = await db
      .select({ count: sql<number>`count(*)` })
      .from(studentBadges)
      .where(
        and(
          eq(studentBadges.studentId, studentId),
          eq(studentBadges.badgeId, badgeId)
        )
      );
    
    return result.count > 0;
  }

  // Paper completion methods
  async recordPaperCompletion(insertCompletion: InsertPaperCompletion): Promise<PaperCompletion> {
    // Check if already completed
    const [existing] = await db
      .select()
      .from(paperCompletions)
      .where(
        and(
          eq(paperCompletions.studentId, insertCompletion.studentId),
          eq(paperCompletions.paperIdentifier, insertCompletion.paperIdentifier)
        )
      );
    
    if (existing) {
      // Update existing record
      const [updated] = await db
        .update(paperCompletions)
        .set({
          score: insertCompletion.score,
          maxScore: insertCompletion.maxScore,
          completedAt: new Date(),
          pointsEarned: insertCompletion.pointsEarned
        })
        .where(eq(paperCompletions.id, existing.id))
        .returning();
      
      // Update student streak and points (for updated entry, we only give points if none were given before)
      if (existing.pointsEarned === 0 && insertCompletion.pointsEarned && insertCompletion.pointsEarned > 0) {
        await this.updateStudentPoints(insertCompletion.studentId, insertCompletion.pointsEarned);
      }
      
      await this.updateStudentStreak(insertCompletion.studentId);
      
      return updated;
    } else {
      // Create new record
      const [completion] = await db
        .insert(paperCompletions)
        .values(insertCompletion)
        .returning();
      
      // Update student streak and points
      if (insertCompletion.pointsEarned) {
        await this.updateStudentPoints(insertCompletion.studentId, insertCompletion.pointsEarned);
      }
      await this.updateStudentStreak(insertCompletion.studentId);
      
      // Check for badge awards based on completions
      await this.checkForCompletionBadges(insertCompletion.studentId);
      
      return completion;
    }
  }

  async getStudentCompletedPapers(studentId: number): Promise<PaperCompletion[]> {
    return db
      .select()
      .from(paperCompletions)
      .where(eq(paperCompletions.studentId, studentId))
      .orderBy(desc(paperCompletions.completedAt));
  }

  async getPaperCompletionStats(): Promise<{subject: string, completionCount: number}[]> {
    const results = await db
      .select({
        subject: paperCompletions.subject,
        completionCount: sql<number>`count(*)`
      })
      .from(paperCompletions)
      .groupBy(paperCompletions.subject);
    
    return results;
  }

  // Badge checking logic
  private async checkForCompletionBadges(studentId: number): Promise<void> {
    // Get all papers completed by this student
    const completedPapers = await this.getStudentCompletedPapers(studentId);
    
    // Get all badges
    const allBadges = await this.getAllBadges();
    
    // Check for completion badges
    const completionCount = completedPapers.length;
    
    // Check for subject-specific badges
    const subjectCounts: Record<string, number> = {};
    for (const paper of completedPapers) {
      subjectCounts[paper.subject] = (subjectCounts[paper.subject] || 0) + 1;
    }
    
    // Find eligible badges
    for (const badge of allBadges) {
      if (badge.category === 'completion' && completionCount >= parseInt(badge.requirements)) {
        await this.tryAwardBadge(studentId, badge.id);
      } else if (badge.category === 'subject') {
        const [subject, count] = badge.requirements.split(':');
        if (subjectCounts[subject] >= parseInt(count)) {
          await this.tryAwardBadge(studentId, badge.id);
        }
      }
    }
  }
  
  private async tryAwardBadge(studentId: number, badgeId: number): Promise<void> {
    try {
      const hasEarned = await this.hasStudentEarnedBadge(studentId, badgeId);
      if (!hasEarned) {
        await this.awardBadgeToStudent({ studentId, badgeId });
      }
    } catch (error) {
      console.error("Error awarding badge:", error);
    }
  }
}

export const storage = new DatabaseStorage();
