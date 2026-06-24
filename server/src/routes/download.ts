import { Router } from "express";
import { minioClient, BUCKET_NAME } from "../lib/minio.js";

const router = Router();

router.get("/:fileName", async (req, res) => {
  try {
    const { fileName } = req.params;
    const stream = await minioClient.getObject(BUCKET_NAME, fileName);
    stream.pipe(res);
  } catch (error) {
    res.status(404).json({ error: "File not found" });
  }
});

export default router;
