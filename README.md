# Axel

Calm, clarity and silence — in the middle of the noise.

ADHD support prototype for adults in South Africa. See [docs/PROJECT_OVERVIEW.md](./docs/PROJECT_OVERVIEW.md) for product vision and [docs/PROTOTYPE_ARCHITECTURE.md](./docs/PROTOTYPE_ARCHITECTURE.md) for the prototype stack.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview production build

## Environment

Copy `.env.example` to `.env` and add your Gemini API key when wiring AI (Day 2). The key is server-side only via Vercel.

## Deploy

Push to GitHub; Vercel auto-deploys from `main`.
