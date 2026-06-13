# ASCII Wireframes — Portal Internal GBB
> Desain: Notion-style (sidebar kiri + konten kanan)

## Global Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│ 🟢 GBB Portal Internal                              🔔  👤 Admin ▼ │
├────────────┬─────────────────────────────────────────────────────────┤
│            │                                                         │
│  SIDEBAR   │                    CONTENT AREA                         │
│            │                                                         │
│  📊 Dashboard   │                                                    │
│  👥 Beswan      │                                                    │
│  📚 Kurikulum   │                                                    │
│  🎓 Mentor      │                                                    │
│  🎤 Event       │                                                    │
│  📝 Penugasan   │                                                    │
│  💰 Keuangan ▼  │                                                    │
│    Rekonsiliasi  │                                                    │
│    Db Donatur    │                                                    │
│    Monitoring    │                                                    │
│  📄 Laporan     │                                                    │
│            │                                                         │
│  ─────────── │                                                       │
│  ⚙ Settings │                                                       │
│  Periode: BBB4 ▼│                                                    │
└────────────┴─────────────────────────────────────────────────────────┘
```

---

## 1. Dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│  Dashboard                                                      │
│                                                                 │
│  [Tab: Event] [Tab: Growth] [Tab: Beswan]                       │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │ 📊 12    │ │ ✅ 8     │ │ 👥 15    │ │ 💰 4.2jt │           │
│  │ Total    │ │ Selesai  │ │ Beswan   │ │ Donasi   │           │
│  │ Event    │ │ Event    │ │ Aktif    │ │ Bulan Ini│           │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
│                                                                 │
│  ┌─────────────────────────┐ ┌─────────────────────────┐       │
│  │  Event per Bulan        │ │  Kehadiran Beswan        │       │
│  │  ┌───┐                  │ │                          │       │
│  │  │▓▓▓│ ┌───┐            │ │  ████████████░░ 85%      │       │
│  │  │▓▓▓│ │▓▓▓│ ┌───┐      │ │  Rata-rata kehadiran     │       │
│  │  │▓▓▓│ │▓▓▓│ │▓▓▓│      │ │                          │       │
│  │  Agt   Sep   Okt        │ │  ┌─── Pie Chart ───┐     │       │
│  └─────────────────────────┘ │  │  Hadir  85%      │     │       │
│                              │  │  Absen  15%      │     │       │
│  ┌─────────────────────────┐ └─────────────────────────┘       │
│  │  Penugasan Overview     │                                    │
│  │  Submitted: 45          │                                    │
│  │  Graded: 38             │                                    │
│  │  Pending: 7             │                                    │
│  └─────────────────────────┘                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Database Beswan

```
┌─────────────────────────────────────────────────────────────────┐
│  Database Beswan                                  [+ Tambah]    │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │ 👥 15    │ │ ✅ 12    │ │ 🎓 3     │ │ 📊 3.45  │           │
│  │ Total    │ │ Aktif    │ │ Alumni   │ │ Avg IPK  │           │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
│                                                                 │
│  🔍 Cari nama/NIM...  [Semua Batch ▼] [Semua Status ▼] 🔄      │
│                                                                 │
│  ┌───┬────┬────────────────┬──────────┬───────┬────────┬──────┐ │
│  │ # │Foto│ Nama           │ NIM      │ Batch │ Status │ Aksi │ │
│  ├───┼────┼────────────────┼──────────┼───────┼────────┼──────┤ │
│  │ 1 │ 🟢│ Ahmad Fauzi     │ 21050111 │ BBB3  │ Aktif  │ 👁 ✏│ │
│  │ 2 │ 🟢│ Siti Nurhaliza  │ 21050112 │ BBB4  │ Aktif  │ 👁 ✏│ │
│  │ 3 │ ⚫│ Budi Santoso    │ 20050109 │ BBB2  │ Alumni │ 👁 ✏│ │
│  └───┴────┴────────────────┴──────────┴───────┴────────┴──────┘ │
│                                              [< 1 2 3 ... >]   │
└─────────────────────────────────────────────────────────────────┘
```

### 2a. Detail Beswan (Slide-over / Modal)

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Kembali                Ahmad Fauzi                    [✏ Edit]│
│                                                                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ 📷 Foto   Nama: Ahmad Fauzi                               │ │
│  │           NIM: 21050111                                    │ │
│  │           Email: ahmad@mail.com | HP: 081234567890         │ │
│  │           Batch: BBB3, BBB4    | Status: Aktif             │ │
│  │           CV: 📎 Download                                  │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  [Tab: Rapor] [Tab: Absensi] [Tab: Tugas] [Tab: Refleksi]      │
│                                                                 │
│  ── Rapor ──────────────────────────────────────────────────── │
│  Kehadiran: 10/12 event (83%)  ████████░░                      │
│  Tugas: 5/6 submitted, avg nilai 85                            │
│  Refleksi: 4/5 bulan submitted                                 │
│                                                                 │
│  ── Absensi per Event ──────────────────────────────────────── │
│  │ Event                    │ Tanggal    │ Status   │          │
│  │ Growth: CV Writing       │ 15 Sep 25  │ ✅ Hadir │          │
│  │ Talkshow: Public Speaking│ 22 Sep 25  │ ❌ Absen │          │
│  │ Growth: Interview Prep   │ 10 Okt 25  │ ✅ Hadir │          │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Kurikulum & Library

```
┌─────────────────────────────────────────────────────────────────┐
│  Kurikulum & Library                                            │
│                                                                 │
│  [Tab: 📋 Kurikulum] [Tab: 📚 Library]                          │
│                                                                 │
│  ═══ KURIKULUM ═══════════════════════════════════════════════  │
│                                                                 │
│  Periode: BBB4 (Jan-Jun 2026)    Goal: "Membangun softskill..." │
│                                                    [+ Topik]    │
│                                                                 │
│  ┌───┬────────────────────┬──────────┬─────────┬──────┬───────┐ │
│  │ # │ Topik              │ Detail   │ TOR     │Status│ Media │ │
│  ├───┼────────────────────┼──────────┼─────────┼──────┼───────┤ │
│  │ 1 │ CV Writing         │ Cara...  │ 📎 PDF  │ ✅   │ ▶ 📄 │ │
│  │ 2 │ Public Speaking     │ Tips...  │ 📎 PDF  │ ✅   │ ▶ 📄 │ │
│  │ 3 │ Interview Prep      │ Mock...  │ 📎 PDF  │ 🟡   │ — —  │ │
│  │ 4 │ Personal Branding   │ Build... │ 📎 PDF  │ ⬜   │ — —  │ │
│  └───┴────────────────────┴──────────┴─────────┴──────┴───────┘ │
│  Legend: ✅ done  🟡 ongoing  ⬜ planned  ▶=YouTube  📄=Slide   │
│                                                                 │
│  ═══ LIBRARY ═════════════════════════════════════════════════  │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                        │
│  │ 📚 24    │ │ 🎤 18    │ │ 📤 6     │                        │
│  │ Total    │ │ Dari     │ │ Upload   │                        │
│  │ Materi   │ │ Event    │ │ Manual   │                        │
│  └──────────┘ └──────────┘ └──────────┘                        │
│                                                                 │
│  🔍 Cari materi...  [Semua Tag ▼] [Semua Tipe ▼]  [+ Upload]   │
│                                                                 │
│  ┌────────────────────┐ ┌────────────────────┐                  │
│  │ 📄 CV Writing 101  │ │ 📄 Public Speaking │                  │
│  │ Tags: #career #cv  │ │ Tags: #softskill   │                  │
│  │ AI: "Materi ini..."│ │ AI: "Tips untuk..." │                  │
│  │ 📎 Download  ▶ YT  │ │ 📎 Download  ▶ YT  │                  │
│  └────────────────────┘ └────────────────────┘                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Database Mentor

```
┌─────────────────────────────────────────────────────────────────┐
│  Database Mentor                                  [+ Tambah]    │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                        │
│  │ 🎓 12    │ │ 🏠 5     │ │ 🌐 7     │                        │
│  │ Total    │ │ UNDIP    │ │ non-UNDIP│                        │
│  └──────────┘ └──────────┘ └──────────┘                        │
│                                                                 │
│  🔍 Cari nama...  [Semua Bidang ▼] [UNDIP/non-UNDIP ▼] 🔄      │
│                                                                 │
│  ┌───┬────────────────┬────────────────┬──────────┬─────┬──────┐│
│  │ # │ Nama           │ Bidang         │ Event    │ Avg │ Aksi ││
│  ├───┼────────────────┼────────────────┼──────────┼─────┼──────┤│
│  │ 1 │ Dr. Rini       │ Public Speaking│ 3 event  │ 4.8 │ 👁 ✏││
│  │ 2 │ Farhat (🏠)    │ Project Mgmt   │ 2 event  │ 4.5 │ 👁 ✏││
│  └───┴────────────────┴────────────────┴──────────┴─────┴──────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. Event Talkshow

```
┌─────────────────────────────────────────────────────────────────┐
│  Event Talkshow                                   [+ Buat Event]│
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │ 🎤 12    │ │ ✅ 8     │ │ 📅 3     │ │ ⚠ 2     │           │
│  │ Total    │ │ Done     │ │ Upcoming │ │ Belum    │           │
│  │ Event    │ │          │ │          │ │ Rekaman  │           │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
│                                                                 │
│  ⚠ Alert: 2 event selesai belum ada link rekaman/materi!        │
│  [EVT-BBB4-03 Growth: Interview] [EVT-BBB4-04 Talkshow: AI]    │
│                                                                 │
│  🔍 Cari event...  [Semua Tipe ▼] [Semua Status ▼] 🔄          │
│                                                                 │
│  ┌──────┬──────────────────┬──────────┬────────┬──────┬────────┐│
│  │ Kode │ Nama Event       │ Tanggal  │ Mentor │Status│ Media  ││
│  ├──────┼──────────────────┼──────────┼────────┼──────┼────────┤│
│  │EVT-01│ CV Writing       │ 15/09/25 │ Rini   │ ✅   │ ▶ 📄  ││
│  │EVT-02│ Public Speaking  │ 22/09/25 │ Ahmad  │ ✅   │ ▶ 📄  ││
│  │EVT-03│ Interview Prep   │ 10/10/25 │ Sari   │ ⚠   │ — —   ││
│  │EVT-04│ AI for Students  │ 25/11/25 │ TBD    │ 📅   │ — —   ││
│  └──────┴──────────────────┴──────────┴────────┴──────┴────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Penugasan (Master-Detail)

```
┌─────────────────────────────────────────────────────────────────┐
│  Penugasan                                   [+ Buat Penugasan] │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                        │
│  │ 📝 8     │ │ ✅ 45    │ │ ⏳ 12    │                        │
│  │ Total    │ │ Submitted│ │ Belum    │                        │
│  │ Tugas    │ │          │ │ Kumpul   │                        │
│  └──────────┘ └──────────┘ └──────────┘                        │
│                                                                 │
│  🔍 Cari...  [Semua Batch ▼] [Semua Event ▼]                   │
│                                                                 │
│  ┌─── MASTER (Daftar Tugas) ─────────────────────────────────┐  │
│  │ Kode     │ Judul              │ Event    │Deadline│Kumpul  │  │
│  │ TGS-01   │ Refleksi CV ✅     │ EVT-01   │ 20/09  │ 14/15  │  │
│  │▶TGS-02   │ Essay Speaking 🔵  │ EVT-02   │ 30/09  │ 10/15  │  │
│  │ TGS-03   │ Portfolio ⏳       │ non-event│ 15/10  │ 3/15   │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─── DETAIL (Hasil Beswan — TGS-02) ───────────────────────┐  │
│  │ Tugas: Essay Speaking | Deadline: 30/09 | Event: EVT-02   │  │
│  │                                                            │  │
│  │ Nama            │ Status      │ File  │ Nilai │ Feedback   │  │
│  │ Ahmad Fauzi     │ ✅ graded   │ 📎    │ 85    │ "Bagus..." │  │
│  │ Siti Nurhaliza  │ 📤 submitted│ 📎    │ —     │ [Nilai]    │  │
│  │ Budi Santoso    │ ⏳ belum    │ —     │ —     │ —          │  │
│  │ Dewi Kartika    │ 📤 submitted│ 📎    │ —     │ [Nilai]    │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 7-9. Keuangan (Rekonsiliasi, Database Donatur, Monitoring)

> ℹ Mengacu pada screenshot yang sudah ada.
> Layout, metric cards, tabel, dan filter sudah sesuai desain di foto.

---

## 10. Laporan

```
┌─────────────────────────────────────────────────────────────────┐
│  Laporan & Booklet                                [+ Upload]    │
│                                                                 │
│  🔍 Cari...  [Semua Tipe ▼] [Semua Periode ▼] [Public Only ☐]  │
│                                                                 │
│  ┌───┬──────────────────────┬──────────┬────────┬──────┬───────┐│
│  │ # │ Judul                │ Tipe     │Periode │Public│ Aksi  ││
│  ├───┼──────────────────────┼──────────┼────────┼──────┼───────┤│
│  │ 1 │ Booklet BBB4         │ Booklet  │ BBB4   │ ✅   │ 📎 ✏ ││
│  │ 2 │ Laporan Keuangan Q1  │ Keuangan │ BBB4   │ ✅   │ 📎 ✏ ││
│  │ 3 │ Internal Review BBB3 │ Internal │ BBB3   │ ❌   │ 📎 ✏ ││
│  └───┴──────────────────────┴──────────┴────────┴──────┴───────┘│
└─────────────────────────────────────────────────────────────────┘
```
