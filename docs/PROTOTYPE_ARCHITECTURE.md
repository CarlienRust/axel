# Axel — Prototype Architecture

This document describes the **prototype** stack. For long-term product vision, see [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) and [INITIAL_ARCHITECTURE.md](./INITIAL_ARCHITECTURE.md).

## Stack

| Layer | Choice |
|-------|--------|
| Frontend | React 19 + Vite + TypeScript |
| UI | MUI v6 (theme in `src/theme/index.ts`) |
| Routing | React Router |
| Data fetching | TanStack Query |
| AI | Gemini API via Vercel serverless proxy (`api/gemini.ts`) |
| Persistence | **Local-first** (`localStorage` via `src/services/storage.ts`) |
| Hosting | Vercel (auto-deploy from GitHub) |

## Data — local-first for prototype

All user data lives in the browser under the key `axel-data`. The schema mirrors the planned Supabase tables so migration later is a one-file swap in `services/storage.ts`:

- `dumps` — noise dump content
- `responses` — Axel's one-thing reply per dump
- `checkins` — "did that help you move?" answers
- `prep_notes` — preparation tool entries

**Trade-off:** data is tied to one browser on one device until Supabase sync is added with POPIA consent.

**Prototype user:** hardcoded as `prototype-user-001` in `src/constants/user.ts`.

## Service layer

- `src/services/storage.ts` — all reads/writes (swap point for Supabase)
- `src/services/gemini.ts` — all AI calls (swap point for Claude)

Features never import Gemini or localStorage directly.

## Feature folders

```
src/features/
  dump/       — noise dump input
  onething/   — Axel response + check-in
  landing/    — grounding tools
  prep/       — appointment preparation
```

## MUI theme direction

- Deep slate background, muted sage/teal accent
- Inter font, 16px base, generous line height
- 12px border radius, flat elevation, generous spacing
- Calm, trustworthy — not clinical, not flashy

## Environment variables

```
GEMINI_API_KEY=    # server-side only (Vercel), no VITE_ prefix
```

## Build sequence

1. **Day 1** — scaffold, theme, storage layer, app shell, deploy
2. **Day 2** — Axel prompt in Google AI Studio, wire Gemini API
3. **Days 3–5** — four feature screens
4. **Day 6** — one real user test (single device)
5. **Day 7** — fix what broke

## Deferred

- Supabase / cloud sync
- Authentication
- Journal (phase 3)
- i18n (English + Afrikaans at launch in full product)
- PWA offline mode
- POPIA consent UI (required before cloud sync)
- Subscription / monetization
