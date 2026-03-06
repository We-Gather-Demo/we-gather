#!/bin/bash
echo "Starting backend server..."
cd backend
npx prisma generate
npx prisma db push
npm run dev
