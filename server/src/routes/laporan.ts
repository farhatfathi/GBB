import { Router } from "express";
import { db } from "../db/index.js";
import { laporan } from "../db/schema/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.select().from(laporan);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch laporan" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newItem = await db.insert(laporan).values(req.body).returning();
    res.json(newItem[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create laporan" });
  }
});

export default router;
