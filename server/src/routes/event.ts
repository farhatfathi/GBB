import { Router } from "express";
import { db } from "../db/index.js";
import { event } from "../db/schema/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.select().from(event);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch event" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newEvent = await db.insert(event).values(req.body).returning();
    res.json(newEvent[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create event" });
  }
});

export default router;
