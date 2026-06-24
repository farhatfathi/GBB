import crypto from "crypto";
import { Router } from "express";
import multer from "multer";
import { parseBsiStatement } from "../services/bsi-parser.js";
import { classifyTransactions } from "../services/cashflow-classify.js";
import { db } from "../db/index.js";
import { cashflow } from "../db/schema/index.js";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/preview", upload.single("file"), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }

  try {
    const rawTransactions = parseBsiStatement(req.file.buffer);
    const classified = classifyTransactions(rawTransactions);
    res.json({ data: classified });
  } catch (error) {
    res.status(500).json({ error: "Failed to parse excel file" });
  }
});

router.post("/save", async (req, res) => {
  try {
    const transactions = req.body.transactions;
    // Minimal validasi array of objects
    if (!Array.isArray(transactions) || transactions.length === 0) {
      res.status(400).json({ error: "Invalid payload" });
      return;
    }
    
    // Map ke schema db
    const insertData = transactions.map((t: any) => ({
      id: crypto.randomUUID(),
      ftNumber: t.ftNumber,
      tanggal: t.tanggal ? new Date(t.tanggal) : null,
      deskripsi: t.keterangan,
      nominal: String(t.nominal),
      tipe: t.tipe,
      kategori: t.kategori,
      statusKlasifikasi: t.statusKlasifikasi,
    }));

    await db.insert(cashflow).values(insertData).onConflictDoNothing(); // hindari duplicate ft_number
    res.json({ success: true, inserted: insertData.length });
  } catch (error) {
    res.status(500).json({ error: "Failed to save rekonsiliasi data" });
  }
});

export default router;
