# Axel

*Calm, clarity and silence — in the middle of the noise.*

ADHD support prototype for adults in South Africa. Local-first, Gemini-powered, deployed on Vercel.

---

## What it does

| Phase | Feature |
|-------|---------|
| **1 — Core loop** | Home → Brain dump → Focus → Check-in |
| **2 — Reframe** | Written paragraph after check-in (6 in rotation) |
| **3 — Journal** | Date-stamped log of dumps and one-things (under Profile) |
| **4 — Ground** | Breath, Anchor, Postpone — pill tabs + bottom actions |
| **5 — Preparation** | Journal-informed AI reflection + guided prompts |

---

## Navigation (4 tabs)

| Tab | Purpose |
|-----|---------|
| **Home** | Welcome, logo, start brain dump |
| **Tools** | Landing tools hub — Reframe, Ground, Preparation (+ Focus when in session) |
| **Library** | Resume flow, brain dump shortcut, recent entries |
| **Profile** | Avatar, week overview, journal, background settings |

Tool sub-pages (Ground, Reframe, Preparation) use a **back arrow** to Tools and **action buttons fixed above the bottom nav**.

---

## Visual references

| Asset | Purpose |
|-------|---------|
| [docs/axel_ui_mockup.png](./docs/axel_ui_mockup.png) | Screen layout, components, 4-tab bar |
| [docs/background_moodboard.png](./docs/background_moodboard.png) | App background splash options (Profile → Settings) |

Brand tokens: [`src/theme/brand.ts`](./src/theme/brand.ts). Full guidelines: [docs/BRAND_GUIDELINES.md](./docs/BRAND_GUIDELINES.md).

---

## Quick start

```bash
npm install
cp .env.example .env.local   # add GEMINI_API_KEY
npm run dev
```

Open `http://localhost:5173`.

---

## Environment

| Variable | Required | Notes |
|----------|----------|-------|
| `GEMINI_API_KEY` | Yes | Google AI Studio key |
| `GEMINI_MODEL` | No | Defaults to `gemini-2.0-flash-lite` |

---

## Deploy

Push to `main` on GitHub. Vercel auto-deploys the SPA and serverless API routes (`/api/gemini`, `/api/prep`). Set `GEMINI_API_KEY` in the Vercel project settings.

---

## Docs

| Doc | Purpose |
|-----|---------|
| [PROTOTYPE_ARCHITECTURE.md](./docs/PROTOTYPE_ARCHITECTURE.md) | Stack, routes, phases, UI patterns |
| [PROJECT_OVERVIEW.md](./docs/PROJECT_OVERVIEW.md) | Product vision |
| [BRAND_GUIDELINES.md](./docs/BRAND_GUIDELINES.md) | Visual identity and voice |
| [INITIAL_ARCHITECTURE.md](./docs/INITIAL_ARCHITECTURE.md) | Long-term product architecture |
| [BACKGROUND.md](./docs/BACKGROUND.md) | Research context |

---

## Project layout

```
src/
  app/           Router, providers
  components/    Brand UI, ToolScreenLayout, shared shells
  constants/     Copy, timing, user
  features/      entry, dump, onething, return, reframe, journal,
                 library, tools, profile, landing (ground), prep
  services/      localStorage, Gemini client
  theme/         brand tokens, MUI theme, background preference
api/             Vercel serverless (gemini, prep)
server/gemini/   Prompts, generation, dev proxy
```
