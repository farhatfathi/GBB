import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { periode } from "./core";

export const laporan = pgTable("laporan", {
  id: text("id").primaryKey(),
  judul: text("judul").notNull(),
  tipe: text("tipe"), // laporan_keuangan | booklet
  periodeId: text("periode_id").references(() => periode.id),
  fileUrl: text("file_url").notNull(),
  isPublic: boolean("is_public").default(false),
  createdAt: timestamp("created_at").defaultNow()
});
