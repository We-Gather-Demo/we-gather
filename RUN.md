# We Gather - Quick Start

## Run the App

**Terminal 1 - Backend:**
```bash
chmod +x start-backend.sh && ./start-backend.sh
```

**Terminal 2 - Frontend:**
```bash
chmod +x start-frontend.sh && ./start-frontend.sh
```

Or manually:
```bash
# Backend (Terminal 1)
cd backend && npx prisma generate && npx prisma db push && npm run dev

# Frontend (Terminal 2)
cd frontend && npm install && npm run dev
```

## Endpoints
- Backend: `http://localhost:3001`
- Frontend: `http://localhost:5173`
- Database: SQLite (`backend/dev.db`)
