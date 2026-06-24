import { Router } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "../lib/auth.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// Mount Better Auth handler for all /api/auth/* routes
router.all("/api/auth/*", toNodeHandler(auth));

router.get("/api/me", authMiddleware, (req, res) => {
  res.json({
    user: (req as any).user
  });
});

export default router;
