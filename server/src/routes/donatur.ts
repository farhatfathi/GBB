import { Router } from "express";
import { db } from "../db/index.js";
import { donatur } from "../db/schema/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.select().from(donatur);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch donatur" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newDonatur = await db.insert(donatur).values(req.body).returning();
    res.json(newDonatur[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create donatur" });
  }
});

export default router;
