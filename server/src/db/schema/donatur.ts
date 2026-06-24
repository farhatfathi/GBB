import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { periode } from "./core";

export const donatur = pgTable("donatur", {
  id: text("id").primaryKey(),
  kode: text("kode").notNull().unique(),
  nama: text("nama").notNull(),
  email: text("email").notNull().unique(),
  hp: text("hp"),
  organisasi: text("organisasi"),
  skema: text("skema"),
  passwordHash: text("password_hash"),
  createdAt: timestamp("created_at").defaultNow()
});

export const donaturPeriode = pgTable("donatur_periode", {
  id: text("id").primaryKey(),
  donaturId: text("donatur_id").references(() => donatur.id),
  periodeId: text("periode_id").references(() => periode.id),
  status: text("status"),
  skema: text("skema")
});
