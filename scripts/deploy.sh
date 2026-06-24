#!/bin/bash
set -e

echo "🚀 Starting GBB Portal Deployment..."

# 1. Pull latest code
echo "📦 Pulling latest code..."
git pull origin main

# 2. Build Client
echo "🏗️ Building Frontend..."
cd client
npm install
npm run build
cd ..

# 3. Build Server
echo "🏗️ Building Backend..."
cd server
npm install
npm run build
# Jalankan migrasi database
npm run db:migrate
cd ..

# 4. Restart PM2
echo "🔄 Restarting Server with PM2..."
pm2 reload ecosystem.config.js --env production

echo "✅ Deployment Successful!"
