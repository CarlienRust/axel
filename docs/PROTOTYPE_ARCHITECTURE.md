# Axel — Prototype Architecture

Phased prototype stack, routes, and UI patterns.

---

**Related docs**

| Doc | Purpose |
|-----|---------|
| [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) | Product vision and who we build for |
| [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) | Visual identity, voice, UI tokens |
| [INITIAL_ARCHITECTURE.md](./INITIAL_ARCHITECTURE.md) | Long-term three-layer product |
| [BACKGROUND.md](./BACKGROUND.md) | Research and market context |
| [axel_ui_mockup.png](./axel_ui_mockup.png) | Target UI layout and components |
| [background_moodboard.png](./background_moodboard.png) | Background splash options |

Theme: [`src/theme/`](../src/theme/) (`brand.ts`, `index.ts`, `backgroundPreference.ts`).

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

Written paragraph after check-in. Six in rotation (`src/features/reframe/reframes.ts`). Also browsable from Tools → Reframe.

### Phase 3 — Journal ✅

Date-stamped log of dumps and one-things. Lives under Profile. No graphs, no pushed analysis.

### Phase 4 — Ground tools ✅

Breath (4-4-4-4 visual), Anchor (5-4-3-2-1), Postpone (20-minute timer). Three horizontal pill tabs on the Ground screen.

### Phase 5 — Preparation ✅

Journal-informed AI reflection + guided prompts + copy summary. Clinical adviser review required before public launch.

---

**Routes**

| Route | Screen |
|-------|--------|
| `/` | Home |
| `/dump` | Brain dump (voice + text) |
| `/response/:dumpId` | Focus — one thing |
| `/return/:dumpId` | Check-in + reframe (flow) |
| `/tools` | Landing tools hub |
| `/reframe` | Browse reframes |
| `/ground` | Ground tools (Breath / Anchor / Postpone tabs) |
| `/prep` | Preparation |
| `/library` | Resume flow + brain dump + recent entries |
| `/profile` | Avatar, week overview, journal, settings |
| `/journal` | Redirects to `/profile` |

---

**Bottom navigation (4 tabs — fixed; do not add feature tabs)**

| Tab | Purpose |
|-----|---------|
| Home | Welcome and start brain dump |
| Tools | Reframe, Ground, Preparation (+ active Focus when in session) |
| Library | Pick up where you left off; brain dump shortcut; recent entries |
| Profile | Week stats, journal, background settings |

Core loop screens (`/dump`, `/response`, `/return`) are reached from Home and Library, not from extra tabs.

New features nest under Tools, Library, or Profile hubs.

---

**UI patterns**

### App background

Five splash variants from `background_moodboard.png`, rendered in [`BackgroundSplash.tsx`](../src/components/brand/BackgroundSplash.tsx). User selects in **Profile → Settings**. Preference stored in `localStorage` (`axel-background`).

### Tool sub-pages

Ground, Reframe, and Preparation use [`ToolScreenLayout`](../src/components/layout/ToolScreenLayout.tsx):

- Back arrow (top left) → `/tools`
- Title + optional subtitle
- Scrollable content
- [`BottomActionBar`](../src/components/layout/ToolScreenLayout.tsx) — primary actions fixed above the bottom nav

### Ground screen

Three pill tabs side by side: **Breath | Anchor | Postpone**. Each tab shows tool content in the main area; actions (Begin/Stop, Back/Next, Postpone start/cancel) sit in the bottom action bar.

### Profile screen

Matches mockup: avatar + greeting, settings gear, “This week” stats + bar chart, quote card, full journal list.

### Brand components

Shared UI in `src/components/brand/`: `AxelLogo`, `LandscapeIllustration`, `FocusCard`, `QuoteBlock`, `ToolListCard`, `VoiceTextToggle`, `CircularMicButton`, `AppBackground`.

---

**Key files**

| Area | Path |
|------|------|
| Router + 4-tab nav | `src/app/router.tsx` |
| Copy (user-facing strings) | `src/constants/copy.ts` |
| Session resume (Library) | `src/features/navigation/sessionState.ts` |
| Week stats (Profile) | `src/features/profile/weekStats.ts` |
| Gemini prompts | `server/gemini/prompt.ts`, `prep-prompt.ts` |
| Storage | `src/services/storage.ts` |

---

**Environment**

```
GEMINI_API_KEY=
GEMINI_MODEL=
```

---

**Deferred**

Supabase sync, auth, POPIA consent UI, i18n, dark mode, PWA offline, monetization, ground-tool usage tracking.
