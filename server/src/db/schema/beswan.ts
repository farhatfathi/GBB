import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { periode } from "./core";

export const beswan = pgTable("beswan", {
  id: text("id").primaryKey(),
  namaLengkap: text("nama_lengkap").notNull(),
  nim: text("nim").notNull().unique(),
  email: text("email").notNull().unique(),
  hp: text("hp"),
  cvUrl: text("cv_url"),
  fotoUrl: text("foto_url"),
  passwordHash: text("password_hash"),
  createdAt: timestamp("created_at").defaultNow()
});

export const beswanPeriode = pgTable("beswan_periode", {
  id: text("id").primaryKey(),
  beswanId: text("beswan_id").references(() => beswan.id),
  periodeId: text("periode_id").references(() => periode.id),
  status: text("status") // aktif | alumni
});

export const refleksi = pgTable("refleksi", {
  id: text("id").primaryKey(),
  beswanId: text("beswan_id").references(() => beswan.id),
  periodeId: text("periode_id").references(() => periode.id),
  bulan: text("bulan").notNull(),
  isi: text("isi"),
  status: text("status"),
  tanggalSubmit: timestamp("tanggal_submit"),
  createdAt: timestamp("created_at").defaultNow()
});

export const prestasi = pgTable("prestasi", {
  id: text("id").primaryKey(),
  beswanId: text("beswan_id").references(() => beswan.id),
  periodeId: text("periode_id").references(() => periode.id),
  kuartal: text("kuartal").notNull(),
  judul: text("judul").notNull(),
  buktiUrl: text("bukti_url"),
  status: text("status").default("Pending"),
  createdAt: timestamp("created_at").defaultNow()
});
