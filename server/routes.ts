import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  
  // Create a new inquiry
  app.post("/api/inquiries", async (req: Request, res: Response) => {
    try {
      const inquiryData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(inquiryData);
      res.status(201).json({ 
        success: true, 
        message: "Inquiry submitted successfully!",
        data: inquiry 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit inquiry. Please try again." 
        });
      }
    }
  });
  
  // Get all inquiries
  app.get("/api/inquiries", async (_req: Request, res: Response) => {
    try {
      const inquiries = await storage.getAllInquiries();
      res.status(200).json({ 
        success: true, 
        data: inquiries 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve inquiries." 
      });
    }
  });
  
  // Add a new subscriber
  app.post("/api/subscribers", async (req: Request, res: Response) => {
    try {
      const subscriberData = insertSubscriberSchema.parse(req.body);
      const subscriber = await storage.createSubscriber(subscriberData);
      res.status(201).json({ 
        success: true, 
        message: "Subscribed successfully!",
        data: subscriber 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to subscribe. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
