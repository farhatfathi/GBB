import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";
import { periode } from "./core";

export const topik = pgTable("topik", {
  id: text("id").primaryKey(),
  periodeId: text("periode_id").references(() => periode.id),
  urutan: integer("urutan"),
  judul: text("judul").notNull(),
  detail: text("detail"),
  torUrl: text("tor_url"),
  status: text("status") // planned | ongoing | done
});

export const library = pgTable("library", {
  id: text("id").primaryKey(),
  nama: text("nama").notNull(),
  tipe: text("tipe"), // event_materi | upload
  fileUrl: text("file_url").notNull(),
  aiSummary: text("ai_summary"),
  tags: text("tags"), // comma-separated or jsonb
  eventId: text("event_id"), // nullable
  createdAt: timestamp("created_at").defaultNow()
});
