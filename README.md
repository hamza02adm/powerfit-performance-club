# PowerFit

Premium gym landing page portfolio project for a flagship performance club.

## Stack

- Vite
- React
- TypeScript
- Supabase
- Vercel

## Local Setup

```bash
npm install
npm run dev
```

## Supabase

Run `supabase/schema.sql` in the Supabase SQL editor for a fresh PowerFit project.

Create environment variables:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

The app shows a demo success state when Supabase variables are not configured.

## Vercel

Connect the dedicated PowerFit GitHub repository to Vercel.

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

Add the same `VITE_` Supabase variables in Vercel project settings.

## Design Guardrails

The implementation follows `docs/superpowers/specs/2026-05-07-powerfit-design.md` in the parent portfolio workspace. Keep the page restrained: no badge spam, no fake luxury styling, no aggressive CTAs, and no decorative experiments that do not improve clarity, trust, pacing, or conversion.
