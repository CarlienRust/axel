# Axel — Prototype Architecture

Phased prototype stack and roadmap.

---

**Related docs**

| Doc | Purpose |
|-----|---------|
| [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) | Product vision and who we build for |
| [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) | Visual identity, voice, UI tokens |
| [INITIAL_ARCHITECTURE.md](./INITIAL_ARCHITECTURE.md) | Long-term three-layer product |
| [BACKGROUND.md](./BACKGROUND.md) | Research and market context |

Theme implementation: [`src/theme/`](../src/theme/) (tokens in `brand.ts`, MUI in `index.ts`).

---

**Stack**

| Layer | Choice |
|-------|--------|
| Frontend | React 19 + Vite + TypeScript |
| UI | MUI v6 + Axel brand theme (light mode, Warm Linen) |
| Routing | React Router |
| AI | Gemini via Vercel (`/api/gemini`, `/api/prep`) |
| Persistence | Local-first (`localStorage`) |
| Hosting | Vercel |

---

**Phase roadmap**

### Phase 1 — Core loop ✅

Entry → Brain dump → Focus → Check-in. One AI call per loop.

### Phase 2 — Reframe ✅

Written paragraph after check-in. Six in rotation (`src/features/reframe/reframes.ts`).

### Phase 3 — Journal ✅

Date-stamped log of dumps and one-things. No graphs, no pushed analysis.

### Phase 4 — Ground tools ✅

Breath (4-4-4-4 visual), Anchor (5-4-3-2-1), Postpone (20-minute timer).

### Phase 5 — Prepare ✅

Journal-informed AI reflection + guided prompts + copy summary. Clinical adviser review required before public launch.

---

**Routes**

| Route | Screen |
|-------|--------|
| `/` | Home |
| `/dump` | Brain dump |
| `/response/:dumpId` | Focus |
| `/return/:dumpId` | Check-in + reframe |
| `/tools` | Landing tools hub (Reframe, Ground, Preparation) |
| `/reframe` | Browse reframes |
| `/library` | Resume flow + brain dump + recent entries |
| `/profile` | Avatar, week overview, journal, settings |
| `/ground` | Ground tools (from Tools) |
| `/prep` | Preparation (from Tools) |
| `/journal` | Redirects to `/profile` |

**Bottom navigation (4 tabs)**

| Tab | Purpose |
|-----|---------|
| Home | Welcome and start brain dump |
| Tools | Reframe, Ground, Preparation (+ active Focus when in session) |
| Library | Pick up where you left off; brain dump shortcut; recent entries |
| Profile | Week stats, journal, background settings |

Background splash options from `docs/background_moodboard.png` — selectable in Profile → Settings.

---

**Environment**

```
GEMINI_API_KEY=
GEMINI_MODEL=
```

---

**Deferred**

Supabase sync, auth, POPIA consent UI, i18n, dark mode, PWA offline, monetization.
