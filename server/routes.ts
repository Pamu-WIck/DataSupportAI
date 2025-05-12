import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

import * as fs from 'fs';
import * as path from 'path';
import fetch from 'node-fetch';

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
  
  // Past papers download API
  app.get("/api/download/:examBoard/:subject/:filename", async (req: Request, res: Response) => {
    const { examBoard, subject, filename } = req.params;
    
    // Validate the file path to prevent directory traversal attacks
    const safeExamBoard = path.basename(examBoard);
    const safeSubject = path.basename(subject);
    const safeFilename = path.basename(filename);
    
    const filePath = path.join(
      process.cwd(), 
      'public', 
      'downloads',
      'past-papers', 
      safeExamBoard, 
      safeSubject, 
      safeFilename
    );
    
    try {
      // Check if the file exists locally
      if (fs.existsSync(filePath)) {
        // If it does, serve it
        return res.sendFile(filePath);
      }
      
      // If not, create a sample PDF for testing purposes
      const samplePdfDir = path.join(
        process.cwd(), 
        'public', 
        'downloads',
        'past-papers', 
        safeExamBoard, 
        safeSubject
      );
      
      // Ensure directory exists
      if (!fs.existsSync(samplePdfDir)) {
        fs.mkdirSync(samplePdfDir, { recursive: true });
      }
      
      // Create a simple HTML file with the relevant information
      const fileContents = `
<!DOCTYPE html>
<html>
<head>
  <title>${safeExamBoard} ${safeSubject} ${safeFilename}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; }
    h1 { color: #2dd4bf; }
    .header { border-bottom: 1px solid #ccc; padding-bottom: 20px; margin-bottom: 20px; }
    .content { margin-top: 30px; }
    .footer { margin-top: 50px; font-size: 12px; color: #666; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <h1>The Study Hive</h1>
    <h2>${safeExamBoard.toUpperCase()} ${safeSubject.charAt(0).toUpperCase() + safeSubject.slice(1)}</h2>
    <h3>${safeFilename.replace('.pdf', '').replace(/-/g, ' ')}</h3>
  </div>
  
  <div class="content">
    <p>This is a sample past paper document for educational purposes.</p>
    <p>In a production environment, this would link to the actual past paper content.</p>
    <p>File requested: ${safeFilename}</p>
  </div>
  
  <div class="footer">
    <p>Copyright © ${new Date().getFullYear()} The Study Hive. All rights reserved.</p>
  </div>
</body>
</html>
      `;
      
      fs.writeFileSync(filePath, fileContents);
      
      return res.sendFile(filePath);
    } catch (error) {
      console.error("Error serving past paper:", error);
      return res.status(500).json({ error: "Failed to download past paper" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
