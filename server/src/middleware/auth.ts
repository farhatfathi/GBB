import type { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth.js";

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers as unknown as Headers
    });
    
    if (!session) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    
    // Attach session to request
    (req as any).user = session.user;
    (req as any).session = session.session;
    
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
}

export function requireRole(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user || !allowedRoles.includes(user.role)) {
      res.status(403).json({ error: "Forbidden" });
      return;
    }
    next();
  };
}
