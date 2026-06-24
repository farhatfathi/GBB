import { Router } from "express";
import { db } from "../db/index.js";
import { cashflow } from "../db/schema/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.select().from(cashflow);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cashflow" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newItem = await db.insert(cashflow).values(req.body).returning();
    res.json(newItem[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create cashflow" });
  }
});

export default router;
