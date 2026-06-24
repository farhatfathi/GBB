import { Router } from "express";
import { db } from "../db/index.js";
import { mentor } from "../db/schema/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.select().from(mentor);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch mentor" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newMentor = await db.insert(mentor).values(req.body).returning();
    res.json(newMentor[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create mentor" });
  }
});

export default router;
