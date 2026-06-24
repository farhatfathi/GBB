# 🌟 GBB Portal — Generasi Baik Berdampak

Portal manajemen terpadu untuk yayasan beasiswa **Generasi Baik Berdampak (GBB)**, mencakup pengelolaan beswan (penerima beasiswa), donatur, kurikulum, event, keuangan, dan mentoring.

## Tech Stack

| Layer | Tech |
|-------|------|
| **Frontend** | React 19, TypeScript, Vite, Tailwind CSS, Shadcn/ui, Recharts |
| **Backend** | Express 5, TypeScript, Drizzle ORM, Better Auth |
| **Database** | PostgreSQL 15 |
| **Storage** | MinIO (S3-compatible) |
| **Infra** | Docker Compose, Nginx, PM2 |

## 3 Portal

| Portal | Path | Pengguna |
|--------|------|----------|
| **Internal** | `/internal/*` | Admin, PCM, AnC, Finance, Media |
| **Beswan** | `/beswan/*` | Penerima beasiswa |
| **Donatur** | `/donatur/*` | Donatur & Mentor |

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/farhatfathi/GBB.git
cd GBB

# Install dependencies
cd client && npm install && cd ..
cd server && npm install && cd ..
```

### 2. Setup Environment

```bash
cp server/.env.example server/.env
# Edit server/.env with your database credentials
```

### 3. Start Infrastructure (PostgreSQL + MinIO)

```bash
docker compose up -d
```

### 4. Run Database Migration

```bash
cd server
npm run db:generate
npm run db:migrate
```

### 5. Start Development

```bash
# Terminal 1 — Backend (port 3001)
cd server && npm run dev

# Terminal 2 — Frontend (port 5173)
cd client && npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
# Build client
cd client && npm run build

# Build server
cd server && npm run build
```

## Deployment

```bash
# On VPS, run the deploy script
./scripts/deploy.sh
```

See `nginx/default.conf` for reverse proxy config, and `ecosystem.config.js` for PM2 setup.

## Project Structure

```
GBB/
├── client/                # React Frontend
│   └── src/
│       ├── components/    # Shared components (DataTable, MetricCard, States)
│       ├── contexts/      # Auth context
│       ├── hooks/         # useApi custom hook
│       ├── lib/           # API client, utils
│       └── portals/       # Portal-specific pages
│           ├── auth/      # Login page
│           ├── internal/  # Admin portal (10 pages)
│           ├── beswan/    # Beswan portal (5 pages)
│           └── donatur/   # Donatur portal (6 pages)
├── server/                # Express Backend
│   └── src/
│       ├── db/schema/     # Drizzle ORM schema (9 files, 21 tables)
│       ├── lib/           # Auth, MinIO config
│       ├── middleware/     # Auth middleware
│       ├── routes/        # 12 API route files
│       ├── services/      # BSI parser, cashflow classifier, sheets sync
│       └── cron/          # Scheduled jobs
├── docs/                  # ERD, wireframes, color palette
├── nginx/                 # Nginx config
├── scripts/               # Deploy script
└── docker-compose.yml     # PostgreSQL + MinIO
```

## License

Private — © 2025 Generasi Baik Berdampak
