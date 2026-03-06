#!/bin/bash
echo "Starting frontend dev server..."
cd frontend
npm install 2>/dev/null || true
npm run dev
