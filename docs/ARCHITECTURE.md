# Zylix OS — Architecture

## Current Architecture (Milestone 0)

### Frontend

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 with CSS custom properties for design tokens
- **Fonts:** Geist Sans (interface) and Geist Mono (metadata) via `next/font`
- **Icons:** `@phosphor-icons/react` (Phosphor icons, regular weight)
- **Component model:** Server Components by default, Client Components only for interactivity (navigation, message composer)

### Project Structure

```
src/
  app/          — Next.js App Router pages and layouts
  components/   — Reusable React components
    layout/     — App shell, sidebar
    navigation/ — Bottom navigation (mobile)
    ui/         — Loading, empty, error states
    assistant/  — Conversation list, composer, prompts
    operational/— Task, project, payment, waiting, activity cards
  data/         — Mock data for Milestone 0
  lib/          — Utility functions
  types/        — TypeScript type definitions
```

## Planned Architecture

### Milestone 1: Supabase Authentication

- Supabase Auth for email/password and magic link
- Auth UI component with server-side session handling
- Middleware for protected routes

### Milestone 2: Structured Database + RLS

- PostgreSQL tables via Supabase:
  - `profiles` — user preferences and settings
  - `tasks` — personal tasks with categories
  - `projects` — project records
  - `waiting_items` — items waiting on external dependencies
  - `payments` — payment tracking
  - `activity_log` — audit trail
  - `conversations` — AI conversation history
- Row Level Security (RLS) enforcing per-user data isolation
- Type-safe queries via `@supabase/supabase-js`

### Milestone 3: CRUD Application Workflows

- Server Actions for mutations
- Optimistic UI updates
- Form validation
- Data fetching patterns with Suspense boundaries

### Milestone 4: OpenAI Assistant + Tool Calling

- OpenAI API integration (GPT-4o or equivalent)
- Tool definitions for structured data operations
- Streaming chat responses
- Natural-language parsing into structured actions

### Milestone 5: Conversational Memory

- Long-term memory stored in database
- Context injection into AI prompts
- Conversation continuity across sessions

### Milestones 6-8: PWA, Production Hardening

- Installable PWA with service worker
- Offline-capable data access
- Device testing (Mac, Android, iOS)
- Performance optimisation
- Security audit

## Separation of Concerns

```
┌─────────────────────────────────────────┐
│              UI Layer                    │
│  Server Components → Client Components  │
├─────────────────────────────────────────┤
│          Application Logic              │
│  Server Actions, API Routes             │
├─────────────────────────────────────────┤
│            Data Layer                   │
│  Supabase Client, OpenAI Client         │
├─────────────────────────────────────────┤
│         External Services               │
│  Supabase (DB + Auth), OpenAI (AI)      │
└─────────────────────────────────────────┘
```

## Security Boundaries

- All database access through RLS
- API keys stored in server-only environment variables
- No client-side database access to sensitive operations
- AI tool calling restricted to authenticated sessions
- No secrets in client bundle

## Cross-Device Strategy

- Responsive web as primary surface
- PWA for mobile installation
- Platform-specific wrappers considered post-MVP

## Future PWA Strategy

- Service worker for offline asset caching (not data sync)
- Background sync for queued mutations
- Push notification foundations
