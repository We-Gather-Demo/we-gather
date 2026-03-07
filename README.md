# 🌟 #75Her Project: WeGather

> A community platform that transforms learning about systemic issues into tangible collective action.


---

## 📋 Table of Contents

- [Problem Statement](#-problem-statement)
- [Solution Overview](#-solution-overview)
- [Quick Start & Demo](#-quick-start--demo)
- [Technical Architecture](#️-technical-architecture)
- [Goose Integration](#-goose-integration-aiml-track)
- [Project Logs](#-project-logs--documentation)
- [Testing & Known Issues](#-testing--known-issues)
- [Team & Acknowledgments](#-team--acknowledgments)
- [License & Attributions](#-license--attributions)

---

## 🎯 Problem Statement

| | |
|---|---|
| **Who** |  Individuals experiencing isolation, burnout, and disempowerment under current economic systems who want to take collective action but lack accessible entry points. |
| **Problem** | People seeking alternatives to extractive capitalism can't easily find structured, affordable communities that combine education, mutual support, and direct action—existing options are either too academic, too expensive, or lack accountability in fund distribution. |
| **Impact** | We Gather integrates education, mutual support, and redistribution in one ecosystem. The structure connects the right people, surfaces shared resources, and creates accountability through community ownership. Everyone who enters is invested in making it work because they built it together. |

---

## ✨ Solution Overview

We Gather is a token-gated community built on shared values, mutual aid, and collective resource-building. Members claim a founding NFT to gain verified access to a Discord community where they co-work, share resources, and grow together. In Phase 2, members will vote on where to direct the community's collective 10% investment into mutual aid networks doing real work on the ground. It's infrastructure for people who've been locked out of every other room.

### Key Features

- **Feature 1** — NFT and recognition system, to show founding member status, participation badges, and engagement rewards. This adds excitement and inclusion to the platform. 
- **Feature 2** A verified, token-gated space where members connect, co-work, share resources, and organize around mutual aid.
It turns the NFT from a digital asset into an active, intentional community.

---

## 🚀 Quick Start & Demo

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

### 60-Second Demo Path

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | User navigates to Vercel to claim their Founding Member NFT | NFT is claimed and in their wallet |
| 2 | User joins our Discord and verifies their Founding Member NFT in the #welcome channel by sending the /verify command | NFT is verified and user is granted the Founding Member role and acesses all channels |

📹 **Demo Video:** [Insert Link]  &nbsp;|&nbsp;  🔗 **Live Demo:** [Insert Link]

---

## 🏗️ Technical Architecture

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | Vite + React + TypeScript, React Router, TanStack React Query, TailwindCSS, Radix UI | SPA with token-gated routing, server-state management, and accessible UI components |
| **Backend** | Node.js + Express + TypeScript | REST API serving member, event, and RSVP endpoints |
| **Database** | Prisma ORM + SQLite (`backend/dev.db`) | Schema management, migrations, and local data persistence |
| **Web3 / NFT** | thirdweb (v5) | Wallet connection and founding-member NFT claiming/verification on Base Sepolia |
| **AI Integration** | Described in project vision; not yet wired up in code | Intended to handle logistics and surface relevant resources based on community discussions |

---

## 📋 Project Logs & Documentation

| Log Type | Purpose | Link |
|----------|---------|------|
| Decision Log | Technical choices & tradeoffs | [DECISION LOG](./DECISION_LOG.md) |
| Risk Log | Issues identified & mitigations | [RISK LOG](./RISK_LOG.md) |
| Evidence Log | Sources, assets & attributions |  [EVIDENCE LOG](./EVIDENCE_LOG.md) |

---

## 🧪 Testing & Known Issues

### Automated Tests
No automated test runner is configured yet — neither `frontend/package.json` nor `backend/package.json` defines a `test` script.

### Linting
Frontend linting is set up via ESLint and can be run with:
```bash
cd frontend && npm run lint
```

### Known Issues
| # | Issue | Detail |
|---|-------|--------|
| 1 | **NFT retrieval / network constraint** | NFT claiming and retrieval only works when the connected wallet has gas on **Base Sepolia**. Ensure you have Base Sepolia ETH before attempting to claim a founding-member NFT. |
| 2 | **Backend CORS hard-coded to production origin** | `backend/src/index.ts` sets `origin: "https://we-gather-psi.vercel.app/"`. Local frontend requests from `http://localhost:5173` will be blocked by CORS. To develop locally, temporarily change the origin to `http://localhost:5173` (or an array of allowed origins) and restart the backend. |
| 3 | **Schema / migration mismatch risk** | The initial migration creates `email NOT NULL`, but the Prisma schema marks `email` as optional. If the database was initialised with the first migration before the schema was updated, email constraints may differ from what the ORM expects. Run `npx prisma migrate status` to confirm migrations are in sync. |

### Next Steps
- **Backend route tests**: Add [Vitest](https://vitest.dev/) (or Jest) + [Supertest](https://github.com/ladjs/supertest) to test Express routes (member creation, RSVP, event listing).
- **Frontend component tests**: Add Vitest + [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for component and hook coverage.
- **CI**: Set up a GitHub Actions workflow to run linting and tests on every pull request.

---

## 👥 Team & Acknowledgments

**Team Name:** We Gather

| Name | Role | GitHub | LinkedIn |
|------|------|--------|----------|
| Kaya Hampton | Project Manager | [@kayah13](https://github.com/kayah13) | [Profile](https://linkedin.com/in/kayahampton) |
| Andrea Scales | Designer/Frontend Designer | [@AndreaScales](https://github.com/AndreaScales) | [Profile](https://linkedin.com/in/AndreaScales) |
| Harshita | Backend Developer | [@harshita264](https://github.com/harshita264) | [Profile](https://linkedin.com/in/username) |

### Special Thanks

- [CreateHER Fest](https://createherfest.com)
- Athika Fatima (https://www.linkedin.com/in/athika-fatima/)
- goose / Block

---

## 📄 License & Attributions

**Project License:** MIT — see the [LICENSE](./LICENSE) file for full terms.

Dependencies are distributed under their own respective licenses; refer to each project's documentation for details.

### Key Attributions

| Library / Asset | License | Link |
|----------------|---------|------|
| React | MIT | [react.dev](https://react.dev) |
| Vite | MIT | [vitejs.dev](https://vitejs.dev) |
| Express | MIT | [expressjs.com](https://expressjs.com) |
| Prisma | Apache-2.0 | [prisma.io](https://www.prisma.io) |
| TailwindCSS | MIT | [tailwindcss.com](https://tailwindcss.com) |
| Radix UI | MIT | [radix-ui.com](https://www.radix-ui.com) |
| TanStack Query | MIT | [tanstack.com/query](https://tanstack.com/query) |
| thirdweb | Apache-2.0 | [thirdweb.com](https://thirdweb.com) |

---

<p align="center">
  Built with ❤️ for the <strong>#75HER Challenge</strong> | CreateHER Fest 2026
</p>
