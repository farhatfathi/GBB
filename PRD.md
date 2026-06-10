# PRD — Portal Web Beasiswa GBB (v2)

> **Version**: 2.0 — MVP | **Date**: 17 Mei 2026 | **Status**: 🟢 Approved

---

## 1. Latar Belakang

Yayasan Gerakan Baik Berdampak (AHU-0010854.AH.01.04.Tahun 2024) menjalankan program **Beasiswa Baik Berdampak (BBB)** untuk mahasiswa aktif Undip. Didirikan oleh 10 alumni muda Undip — motto **#10AlumniBantuSatu** — alumni menyisihkan mulai Rp 100.000/bulan.

Beswan juga mendapat **talkshow, penugasan, dan program pengembangan diri**.

---

## 2. Visi Produk

Portal web terpusat di `portal.baikberdampak.org` yang:
1. Memudahkan pekerjaan Tim Finance & AnC
2. Memusatkan seluruh data, brief, materi & kegiatan
3. Memberikan transparansi keuangan & progress kepada donatur
4. Menjadi single platform bagi beswan berinteraksi dengan program GBB

---

## 3. User Roles

| Role | Deskripsi | Portal | Auth Method |
|------|-----------|--------|-------------|
| **Super Admin** | Tim inti GBB — full access | Internal | Email + Password |
| **Admin Program (PCM)** | Tim Program & Kurikulum | Internal | Email + Password |
| **Admin Finance** | Tim Keuangan | Internal | Email + Password |
| **Admin AnC** | Alumni & Collaboration | Internal | Email + Password |
| **Beswan** | Penerima beasiswa aktif | Beswan | Email + Password (generated) |
| **Donatur** | Alumni donatur | Donatur | Gmail OAuth |
| **Mentor** | Mentor event & 1-on-1 | - | Tidak login, data dikelola internal |

---

## 4. Arsitektur Portal

```
portal.baikberdampak.org
├── /internal   → Portal Internal (Tim GBB)
├── /beswan     → Portal Beswan (Penerima)
└── /donatur    → Portal Donatur (Alumni)

Single login → diarahkan ke portal sesuai role
```

---

## 5. FLOW PORTAL — Actor 1: Tim Internal

### FASE 1 — Setup Periode (sekali per batch)

#### Step 1.1 — Konfigurasi Periode
- Input: nama batch (e.g. BBB4), tanggal mulai, tanggal selesai
- Output: periode aktif tersimpan → acuan semua modul
- Rule: bisa **>1 periode aktif bersamaan** (jika pembinaan molor)
- Rule: periode hanya 2 opsi: **Jan–Jun** (semester 1) atau **Jul–Des** (semester 2)

#### Step 1.2 — Input Data Beswan
- Input per beswan: nama lengkap, NIM, email, HP, foto, CV
- Assign ke periode aktif → status aktif
- Sistem generate kredensial login (email + password default)
- Rule: 1 beswan bisa >1 periode (multi-batch)

#### Step 1.3 — Susun Kurikulum
- Input per topik: urutan, goal, topik, detail topik, TOR (file/link)
- Per periode, status awal: **planned**
- Topik menjadi pilihan saat membuat event

### FASE 2 — Operasional Event

#### Step 2.0 — Input/Update Database Mentor
- Input: nama, email, HP, LinkedIn, CV, bidang keahlian
- Flag `is_internal = true` jika mentor adalah anggota GBB
- Data tampil di Portal Beswan (tanpa HP/CV)

#### Step 2.1 — Buat Event
- Pilih periode → pilih topik kurikulum (opsional, bisa non-kurikulum)
- Input: nama, tipe (talkshow/growth/other), format (online/offline/hybrid), lokasi/link, tanggal, jam, kapasitas, deskripsi
- Assign mentor (bisa >1, peran: speaker/moderator/fasilitator)
- Status awal: **upcoming**

#### Step 2.2 — Event Berlangsung
- Absensi dicatat oleh tim internal (hadir/tidak hadir)
- Peserta hadir → row terbuat di `event_beswan`

#### Step 2.3 — Pasca Event
- Upload link rekaman YouTube + slide materi
- Status event → **done**
- Status kurikulum terkait → **done** (youtube & slide otomatis muncul)
- Alert jika event done tapi rekaman/slide belum diisi

#### Step 2.4 — Materi Masuk Library
- Slide/materi dari event otomatis masuk Library
- AI summary + auto-tagging topik
- Tim bisa edit tag manual
- Library juga bisa diisi upload manual (materi luar event)

#### Step 2.5 — Buat Penugasan
- Pilih batch → pilih event sumber (opsional, bisa non-event)
- Input: judul, deskripsi/soal, deadline
- Muncul di Portal Beswan untuk semua beswan periode tersebut
- Status awal per beswan: **belum_kumpul**

#### Step 2.6 — Penilaian Penugasan
- Beswan submit → status **submitted**
- PCM buka Hasil Penugasan → master-detail view
- Input per beswan: nilai (angka) + feedback (teks)
- Status → **graded**, notifikasi ke beswan

#### Step 2.7 — Rapor & Absensi
- Generate rapor per beswan per periode:
  - Absensi: hadir/tidak per event
  - Tugas: nilai & status per penugasan
  - Refleksi: sudah/belum submit per bulan
- Referensi contoh: Binar Academy

### FASE 3 — Keuangan (Finance)

#### Step 3.1 — Upload Bank Statement BSI
- Upload file .xlsx mutasi BSI (multi-sheet: Sept, Agt, dll)
- Parsing otomatis: baca dari **baris ke-13**, deteksi kolom CR/DB
- Deduplication: FT Number + Nominal

#### Step 3.2 — Klasifikasi Cashflow
- Pre-fill kategori dari kolom Kat. BSI bawaan bank
- Klasifikasi manual per baris:
  - Cash In → ketik nama donatur (link ke database donatur)
  - Cash Out → pilih kategori & sub-kategori pengeluaran
- Status: **inputted / pending / unknown**
- Simpan → masuk database Cashflow

### FASE 4 — Alumni & Collaboration (AnC)

#### Step 4.1 — Monitoring Donatur
- Daftar donatur aktif per periode
- Cek konsistensi donasi via data cashflow
- Update status donatur per periode

#### Step 4.2 — Upload Laporan & Booklet
- Upload PDF laporan/booklet GBB
- Flag `is_public` (tampil di Portal Donatur)
- Attach ke periode terkait

---

## 6. FLOW PORTAL — Actor 2: Beswan

#### Step B1 — Login
- Email + password dari tim GBB
- Pertama kali → lengkapi profil (HP wajib, CV opsional)

#### Step B2 — Beranda
- Greeting otomatis tiap hari (if-else 5 variasi, tanpa AI)
- My Events (aktif & history)
- My Tasks (pending & history)
- Notifikasi: tugas baru, tugas dinilai, pengingat refleksi

#### Step B3 — Ikut Event
- Event berdasarkan periode aktif
- Setelah selesai: tombol slide & rekaman (disabled jika belum ada)
- Absensi dicatat tim internal

#### Step B4 — Upload Penugasan
- List: judul, event sumber, deadline, status
- Upload file jawaban (PDF/dokumen)
- Submit → **submitted** (tidak bisa edit ulang)
- Jika dinilai → tampil nilai & feedback

#### Step B5 — Library Materi
- Search & filter by topik/tag
- Fitur "Usulan Topik Materi" → masuk database untuk review PCM

#### Step B6 — Database Mentor
- Tampil: nama, bidang keahlian, history event
- Tidak tampil: HP, CV → "hubungi tim Program GBB"
- Request 1-on-1:
  - Sudah pilih mentor → request langsung
  - Belum tahu → form curhat/clue → tim GBB matching

#### Step B7 — Refleksi Bulanan (wajib)
- Cek berdasarkan start_date–end_date periode aktif
- Alert jika bulan ini belum diisi
- Form: pertanyaan & checklist dari PCM & AnC
- Upload transkrip (wajib)
- Dropdown bulan untuk lihat/edit sebelumnya

#### Step B8 — Input Prestasi
- Input: judul, kategori (studi/organisasi/luar kampus), tanggal, deskripsi
- Upload sertifikat/foto (wajib, multi-file)
- Alert tiap akhir kuartal jika belum update
- Data tampil di Portal Donatur

---

## 7. FLOW PORTAL — Actor 3: Donatur

#### Step D1 — Login
- Gmail OAuth

#### Step D2 — Beranda
- Greeting otomatis tiap hari
- Total donasi, history konsistensi per bulan/batch, batch yang diikuti

#### Step D3 — Dashboard GBB
- Financial: narasi keuangan, alokasi dana
- Beswan: jumlah aktif, ringkasan progress
- Event: jumlah terlaksana, topik yang dibahas

#### Step D4 — Data & Kegiatan Beswan
- Hanya lihat beswan dari periode di mana donatur aktif
- Per beswan: nama, update kegiatan, prestasi, refleksi (summary)
- Filter per periode/batch

#### Step D5 — Daftar Mentor (CTA)
- Info program mentoring, metric jumlah mentor
- Form pendaftaran: nama, bidang, upload CV, LinkedIn
- Submit → masuk database mentor, status **pending review**

#### Step D6 — Laporan GBB
- Daftar laporan & booklet (is_public = true)
- Download PDF langsung

---

## 8. Business Rules

| Rule | Detail |
|------|--------|
| **Periode = 6 bulan fixed** | Hanya 2 opsi: **Jan–Jun** atau **Jul–Des** |
| **Multi-periode aktif** | Bisa >1 periode aktif bersamaan (jika pembinaan molor) |
| **Multi-batch beswan** | 1 beswan bisa di >1 periode. Punya >1 rapor, >1 set absensi, >1 set tugas |
| **Beswan = 6 bulan** | Durasi beswan per periode = 6 bulan |
| **Donatur daftar per periode** | Daftar 1x per periode. Berikutnya ditanya ulang, AnC centang di portal jika lanjut |
| **Donatur kolom periode auto** | Kolom periode baru otomatis muncul saat periode baru dikonfigurasi |
| **Kode donatur** | Auto-generated: `[Inisial][Semester][Tahun]` — collision: extend inisial nama terakhir 2 huruf |
| **Absensi** | Dicatat tim internal, bukan beswan |
| **Penugasan submit** | Tidak bisa edit setelah submit |
| **Refleksi alert** | Wajib bulanan, terkoneksi periode batch |
| **Prestasi alert** | Wajib update per kuartal |
| **Donatur visibility** | Hanya lihat beswan dari periode di mana ia aktif |
| **Mentor privacy** | Portal Beswan: tanpa HP & CV |
| **BSI parsing** | Baris ke-13, CR/DB detection, dedup FT Number |
| **Login beswan** | Email + password (generated) |
| **Login donatur** | Gmail OAuth |

---

## 9. Pending Discussion

- ERD detail
- ASCII Wireframe / UI Mockups
- Color Palette
- Font Selection

---

## 10. Out of Scope (MVP)

- AI summarization materi (arsitektur disiapkan)
- RAG untuk Library
- Payment gateway
- Mobile app (responsive web dulu)
- Multi-bahasa
