# 🌟 #75Her Project: WeGather

> A community platform that transforms learning about systemic issues into tangible collective action.


---

## 📋 Table of Contents

-[Problem Statement](#-problem-statement)
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
| **Impact** | We Gather integrates education, mutual support, and redistribution in one ecosystem. The AI doesn't extract value—it facilitates deeper human connection by handling logistics and suggesting relevant resources based on community discussions. |

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
| 2 | User joins our Discord and verifies their Founding Member NFT in the #welcome channel by sending /verify | NFT is verified and user is granted the Founding Member role and acesses all channels |

📹 **Demo Video:** [Insert Link]  &nbsp;|&nbsp;  🔗 **Live Demo:** [Insert Link]

---

## 🏗️ Technical Architecture

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | [Technology] | [Purpose] |
| **Backend** | [Technology] | [Purpose] |
| **Database** | [Technology] | [Purpose] |
| **AI Integration** | [Model] | [Purpose] |

---

## 📋 Project Logs & Documentation

| Log Type | Purpose | Link |
|----------|---------|------|
| Decision Log | Technical choices & tradeoffs | [/docs/DECISION_LOG.md](/docs/DECISION_LOG.md) |
| Risk Log | Issues identified & mitigations | [/docs/RISK_LOG.md](/docs/RISK_LOG.md) |
| Evidence Log | Sources, assets & attributions | [/docs/EVIDENCE_LOG.md](/docs/EVIDENCE_LOG.md) |

---

## 🧪 Testing & Known Issues

- **Test Results:** [X passing / Y total]
- **Known Issue:** NFT retrieval issues - only able to retrieve with gas of Base Sepolia
- **Next Steps:** [What you would add with more time]

---

## 👥 Team & Acknowledgments

**Team Name:** [Your Team Name]

| Name | Role | GitHub | LinkedIn |
|------|------|--------|----------|
| Kaya Hampton | Project Manager | [@kayah13](https://github.com/kayah13) | [Profile](https://linkedin.com/in/kayahampton) |
| Andrea Scales | Designer/Frontend Designer | [@username](https://github.com/AndreaScales) | [Profile](https://linkedin.com/in/username) |
| Harshita | Backend Developer | [@username](https://github.com/harshita264) | [Profile](https://linkedin.com/in/username) |

### Special Thanks

- [CreateHER Fest](https://createherfest.com)
- goose / Block

---

## 📄 License & Attributions

**Project License:** [MIT / Apache 2.0 / etc.]

| Library / Asset | License | Link |
|----------------|---------|------|
| [Library/Asset Name] | [License Type] | [Link] |
| [Library/Asset Name] | [License Type] | [Link] |

---

<p align="center">
  Built with ❤️ for the <strong>#75HER Challenge</strong> | CreateHER Fest 2026
</p>
