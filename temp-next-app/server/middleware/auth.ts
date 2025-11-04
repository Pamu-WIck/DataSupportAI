import { Request, Response, NextFunction } from "express";
import { db } from "../db";
import { activityLogs } from "../../shared/schema";

/**
 * Middleware: Require user to be logged in
 */
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({
    success: false,
    message: "Authentication required. Please log in."
  });
};

/**
 * Middleware: Require user to have specific role(s)
 * Usage: requireRole('admin', 'super_admin')
 */
export const requireRole = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

    const user = req.user as any;
    if (!roles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: "Insufficient permissions. This action requires elevated privileges."
      });
    }

    next();
  };
};

/**
 * Middleware: Log activity for audit trail
 */
export const logActivity = (action: string, resource?: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next();
    }

    try {
      const user = req.user as any;
      const resourceId = req.params.id ? parseInt(req.params.id) : null;

      // Log to activity_logs table
      await db.insert(activityLogs).values({
        userId: user.id,
        action,
        resource: resource || null,
        resourceId: resourceId || null,
        ipAddress: req.ip || null,
        userAgent: req.get('user-agent') || null,
      });

      next();
    } catch (error) {
      // Don't block request if logging fails
      console.error("Activity logging failed:", error);
      next();
    }
  };
};
