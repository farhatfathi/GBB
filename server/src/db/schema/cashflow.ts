import { pgTable, text, timestamp, numeric } from "drizzle-orm/pg-core";
import { donatur, donaturPeriode } from "./donatur";
import { periode } from "./core";

export const cashflow = pgTable("cashflow", {
  id: text("id").primaryKey(),
  tanggal: timestamp("tanggal"),
  ftNumber: text("ft_number").unique(),
  deskripsi: text("deskripsi"),
  nominal: numeric("nominal"),
  tipe: text("tipe"), // cash_in | cash_out
  katBsi: text("kat_bsi"),
  donaturId: text("donatur_id").references(() => donatur.id),
  donaturPeriodeId: text("donatur_periode_id").references(() => donaturPeriode.id),
  kategori: text("kategori"),
  subKategori: text("sub_kategori"),
  statusKlasifikasi: text("status_klasifikasi"),
  periodeId: text("periode_id").references(() => periode.id),
  createdAt: timestamp("created_at").defaultNow()
});
