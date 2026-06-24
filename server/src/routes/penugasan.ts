import { Router } from "express";
import { db } from "../db/index.js";
import { penugasan } from "../db/schema/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.select().from(penugasan);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch penugasan" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = await db.insert(penugasan).values(req.body).returning();
    res.json(newTask[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create penugasan" });
  }
});

export default router;
