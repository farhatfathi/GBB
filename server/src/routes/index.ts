import { Router } from "express";
import authRoutes from "./auth.js";
import periodeRoutes from "./periode.js";
import beswanRoutes from "./beswan.js";
import donaturRoutes from "./donatur.js";
import mentorRoutes from "./mentor.js";
import kurikulumRoutes from "./kurikulum.js";
import eventRoutes from "./event.js";
import penugasanRoutes from "./penugasan.js";
import cashflowRoutes from "./cashflow.js";
import laporanRoutes from "./laporan.js";
import uploadRoutes from "./upload.js";
import downloadRoutes from "./download.js";
import rekonsiliasiRoutes from "./rekonsiliasi.js";

const router = Router();

router.use(authRoutes);
router.use("/api/periode", periodeRoutes);
router.use("/api/beswan", beswanRoutes);
router.use("/api/donatur", donaturRoutes);
router.use("/api/mentor", mentorRoutes);
router.use("/api/kurikulum", kurikulumRoutes);
router.use("/api/event", eventRoutes);
router.use("/api/penugasan", penugasanRoutes);
router.use("/api/cashflow", cashflowRoutes);
router.use("/api/laporan", laporanRoutes);
router.use("/api/upload", uploadRoutes);
router.use("/api/download", downloadRoutes);
router.use("/api/rekonsiliasi", rekonsiliasiRoutes);

export default router;
