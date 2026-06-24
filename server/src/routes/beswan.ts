import { Router } from "express";
import { db } from "../db/index.js";
import { beswan, beswanPeriode } from "../db/schema/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.select().from(beswan);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch beswan" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newBeswan = await db.insert(beswan).values(req.body).returning();
    res.json(newBeswan[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create beswan" });
  }
});

export default router;
