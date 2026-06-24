import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { user } from "./core";

export const mentor = pgTable("mentor", {
  id: text("id").primaryKey(),
  nama: text("nama").notNull(),
  email: text("email").notNull(),
  hp: text("hp"),
  linkedinUrl: text("linkedin_url"),
  cvUrl: text("cv_url"),
  bidangKeahlian: text("bidang_keahlian"),
  isInternal: boolean("is_internal").default(false),
  userId: text("user_id").references(() => user.id),
  ketersediaan: text("ketersediaan"),
  createdAt: timestamp("created_at").defaultNow()
});
