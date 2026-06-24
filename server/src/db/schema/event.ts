import { pgTable, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { topik } from "./kurikulum";
import { mentor } from "./mentor";
import { beswan } from "./beswan";

export const event = pgTable("event", {
  id: text("id").primaryKey(),
  kodeEvent: text("kode_event").unique(),
  topikId: text("topik_id").references(() => topik.id),
  namaEvent: text("nama_event").notNull(),
  tipe: text("tipe"),
  format: text("format"),
  lokasi: text("lokasi"),
  tanggal: timestamp("tanggal"),
  deskripsi: text("deskripsi"),
  youtubeUrl: text("youtube_url"),
  slideUrl: text("slide_url"),
  status: text("status"),
  createdAt: timestamp("created_at").defaultNow()
});

export const eventMentor = pgTable("event_mentor", {
  id: text("id").primaryKey(),
  eventId: text("event_id").references(() => event.id),
  mentorId: text("mentor_id").references(() => mentor.id),
  peran: text("peran")
});

export const absensi = pgTable("absensi", {
  id: text("id").primaryKey(),
  eventId: text("event_id").references(() => event.id),
  beswanId: text("beswan_id").references(() => beswan.id),
  hadir: boolean("hadir").default(false),
  waktuAbsen: timestamp("waktu_absen")
});

export const feedback = pgTable("feedback", {
  id: text("id").primaryKey(),
  eventId: text("event_id").references(() => event.id),
  beswanId: text("beswan_id").references(() => beswan.id),
  ratingEvent: integer("rating_event"),
  ratingMentor: integer("rating_mentor"),
  komentar: text("komentar"),
  createdAt: timestamp("created_at").defaultNow()
});
