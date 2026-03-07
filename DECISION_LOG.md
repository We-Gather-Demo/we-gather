
# #75Her Decision Log

> Project Name: WeGather
> 
>Team Name: WeGather


## 📋 Purpose & Instructions

Purpose: Document your key technical choices and reasoning for judges. This helps them understand your engineering thinking.
Instructions:
For each major decision, record the choice made, the "Why," and the "Tradeoff".
Keep it punchy: Each entry should be 1-2 lines maximum.
Focus on: Architecture, tech stack, project scope changes, or selecting between multiple valid options.
Target: 5–10 key decisions minimum.

## Decision Log

| Category | Decision --> Why | Tradeoff |
|----------|---------|------|
| Frontend Tech Stack | Switched from Next.js to React + Vite --> Vite's fast dev server and pure CSR fits our API-driven architecture; no SSR complexity needed | Had to rewrite routing (Next.js file-based → React Router DOM) and update all imports |
| Backend Framework | Express.js + TypeScript over NestJS or Next.js API routes --> Lightweight, minimal boilerplate for a REST API with only member, event, and RSVP routes | Less built-in structure; requires manual error handling and route organization |
| Database | SQLite (via Prisma ORM) over PostgreSQL or MongoDB --> Zero-config local DB ideal for hackathon timeline; Prisma provides type-safe queries across Member, Event, RSVP models | Not suitable for production scale or concurrent multi-user writes; must migrate for deployment |
| ORM / Data Layer | Prisma over raw SQL or TypeORM --> Auto-generated TypeScript types from schema reduce bugs; migrations are straightforward | Adds a build step (`prisma generate`) and cold-start latency with Prisma Client |
| Blockchain / NFT SDK | ThirdWeb SDK over raw ethers.js --> Pre-built `ClaimButton` component and contract management drastically cut smart contract dev time | Tied to ThirdWeb's platform and contract standards; rewrote original smart contract to match ThirdWeb's ERC-721 interface |
| UI Component Library | Radix UI (shadcn/ui) + Tailwind CSS over Material UI or Chakra UI --> Unstyled, accessible primitives with Tailwind give full design control at ~0 CSS overhead | More manual styling work per component; shadcn/ui copies source into the repo (no version lock via npm) |
| API State Management | TanStack React Query over Redux Toolkit or plain `fetch` --> Handles caching, loading states, and refetching out of the box for member/event API calls | Adds ~13 KB dependency; overkill for endpoints that rarely change, but worthwhile for RSVP interactions |
| Language / Type Safety | TypeScript across both frontend and backend --> Shared type discipline catches mismatches between Prisma models and React components at compile time | Requires `tsconfig` tuning in both workspaces and slower cold builds compared to plain JS |
| Deployment | Vercel for frontend over Netlify or GitHub Pages --> Zero-config Vite deployment, instant preview URLs per PR | Backend must be deployed separately (e.g., Railway/Render); CORS origin is hardcoded to the Vercel URL |
| Animation | Framer Motion over CSS animations or React Spring --> Declarative motion API integrates well with React component lifecycle for page transitions and card reveals | Adds ~50 KB to the bundle; animation fidelity is higher than needed for a simple community dashboard |

## 📝 Guidance for Success

✅ DO:
Be Specific: Use "React" instead of "frontend framework".
Quantify: Use "150KB bundle" instead of "large size".
Focus on Engineering: Avoid personal preferences; focus on technical requirements.
Acknowledge Tradeoffs: Every choice has a downside—be honest about what you accepted.
❌ DON'T:
List Every Library: Only include the "needle-movers".
Justify Obvious Choices: Don't explain why you used Git or a code editor.
Write Essays: Keep the judges' time in mind; stay concise.

## ✅ Submission Checklist

- [x] At least 5 decisions documented.
- [x] Every decision has a clear, specific tradeoff.
- [x] Decisions reflect choices made DURING the hackathon.
- [x] Organized by category (Tech Stack, Architecture, etc.).
- [ ] File saved as DECISION_LOG.md in the /docs/ folder.

Part of the #75HER Challenge | CreateHER Fest 2026
