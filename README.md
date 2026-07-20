# Axel

Calm, clarity and silence — in the middle of the noise.

## Prototype features (Phases 1–5)

1. **Core loop** — Home → Brain dump → Focus → Check-in → Reframe
2. **Journal** — date-stamped log of dumps and one-things
3. **Ground** — Breath, Anchor, Postpone tools
4. **Prep** — journal reflection (AI) + appointment prompts

See [docs/PROTOTYPE_ARCHITECTURE.md](./docs/PROTOTYPE_ARCHITECTURE.md).

## Quick start

```bash
npm install
cp .env.example .env.local   # GEMINI_API_KEY
npm run dev
```

## Deploy

Push to GitHub; Vercel auto-deploys. Set `GEMINI_API_KEY` in Vercel.
