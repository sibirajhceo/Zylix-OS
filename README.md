# Zylix OS

Private AI-first personal operating system for managing business, client work, college responsibilities, decisions, and personal projects.

Built for Sibirajh.

## Current Milestone

**Milestone 0 — Cloud Alpha.** Frontend and repository foundation. Application shell with realistic mock data. No AI, database, or authentication connected yet.

## Technology Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Fonts | Geist Sans + Geist Mono via `next/font` |
| Icons | Phosphor Icons (`@phosphor-icons/react`) |
| Package manager | npm |

## Local Setup

```bash
git clone https://github.com/sibirajhceo/Zylix-OS.git
cd Zylix-OS
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript check |

## Project Structure

```
src/
  app/           — Route pages and layouts
  components/    — Reusable components
  data/          — Mock data (Milestone 0)
  lib/           — Utilities
  types/         — TypeScript types
docs/
  PRODUCT.md     — Product definition (canonical source: [/prodSpec.md](./prodSpec.md))
  ARCHITECTURE.md— Architecture decisions
  ROADMAP.md     — Milestone plan (canonical source: [/buildPlan.md](./buildPlan.md))
```

## Deployment Notes

- Preview deployment ready for Vercel or any Next.js-compatible platform
- Set `NEXT_PUBLIC_APP_URL` to the deployment URL
- No other environment variables required until Milestone 1

## Environment Variable Policy

- `.env.example` documents all required variables
- Real values never committed
- Server-only variables prefixed with `SUPABASE_` and `OPENAI_`
- Client-safe variables prefixed with `NEXT_PUBLIC_`

## Current Limitations

- All data is mock data — no persistence
- AI assistant is a visual preview only
- Authentication is not connected
- No offline support
- Mobile native wrappers not yet built

## Next Milestone

**Milestone 1:** Supabase authentication with email/password login and protected routes.
