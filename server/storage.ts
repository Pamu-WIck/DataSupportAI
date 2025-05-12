import { 
  users, 
  type User, 
  type InsertUser,
  inquiries,
  type Inquiry,
  type InsertInquiry,
  subscribers,
  type Subscriber,
  type InsertSubscriber
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Inquiry methods
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getAllInquiries(): Promise<Inquiry[]>;
  
  // Subscriber methods
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, Inquiry>;
  private subscribers: Map<number, Subscriber>;
  currentUserId: number;
  currentInquiryId: number;
  currentSubscriberId: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.subscribers = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentSubscriberId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const createdAt = new Date().toISOString();
    const inquiry: Inquiry = { ...insertInquiry, id, createdAt };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }
  
  async getAllInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.currentSubscriberId++;
    const createdAt = new Date().toISOString();
    const subscriber: Subscriber = { ...insertSubscriber, id, createdAt };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
}

export const storage = new MemStorage();
