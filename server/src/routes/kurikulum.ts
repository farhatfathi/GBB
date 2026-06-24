import { Router } from "express";
import { db } from "../db/index.js";
import { topik, library } from "../db/schema/index.js";

const router = Router();

router.get("/topik", async (req, res) => {
  try {
    const data = await db.select().from(topik);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch topik" });
  }
});

router.get("/library", async (req, res) => {
  try {
    const data = await db.select().from(library);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch library" });
  }
});

export default router;
