import { Router } from "express";
import { db } from "../db/index.js";
import { periode } from "../db/schema/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.select().from(periode);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch periode" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPeriode = await db.insert(periode).values(req.body).returning();
    res.json(newPeriode[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create periode" });
  }
});

export default router;
