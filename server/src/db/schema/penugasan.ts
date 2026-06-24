import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";
import { event } from "./event";
import { beswan } from "./beswan";
import { periode } from "./core";

export const penugasan = pgTable("penugasan", {
  id: text("id").primaryKey(),
  kode: text("kode").unique(),
  judul: text("judul").notNull(),
  eventId: text("event_id").references(() => event.id),
  periodeId: text("periode_id").references(() => periode.id),
  deadline: timestamp("deadline"),
  status: text("status") // active | closed
});

export const tugasBeswan = pgTable("tugas_beswan", {
  id: text("id").primaryKey(),
  penugasanId: text("penugasan_id").references(() => penugasan.id),
  beswanId: text("beswan_id").references(() => beswan.id),
  status: text("status"), // belum_kumpul | submitted | graded
  fileUrl: text("file_url"),
  nilai: integer("nilai"),
  feedback: text("feedback"),
  submittedAt: timestamp("submitted_at")
});
