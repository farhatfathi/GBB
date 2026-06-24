import { Router } from "express";
import multer from "multer";
import { minioClient, BUCKET_NAME } from "../lib/minio.js";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }

  try {
    const fileName = `${Date.now()}-${req.file.originalname}`;
    await minioClient.putObject(BUCKET_NAME, fileName, req.file.buffer, req.file.size, {
      "Content-Type": req.file.mimetype,
    });

    res.json({ url: `/api/download/${fileName}`, fileName });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload file to MinIO" });
  }
});

export default router;
