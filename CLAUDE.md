# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Study Hive** - A comprehensive science education platform for UK students (KS3, GCSE, A-Level) featuring gamification, video lessons, past exam papers, and AI-powered study note generation.

**Tech Stack:** React + TypeScript + Vite (frontend) | Express + Node.js (backend) | PostgreSQL (Neon) + Drizzle ORM | Wouter routing | TanStack Query

## Development Commands

```bash
# Development (runs Vite dev server + Express API on port 5000)
npm run dev

# Production build (builds both frontend and backend)
npm run build

# Production server
npm start

# Type checking
npm run check

# Database migrations
npm run db:push
```

**Note:** The application runs on port 5000 in both development and production. The dev server displays the running URL on startup.

## Project Structure

```
DataSupportAI/
├── client/          # React frontend (Vite)
│   └── src/
│       ├── components/  # Feature-organised components
│       ├── hooks/       # Custom React hooks
│       ├── lib/         # Utilities and configs
│       └── main.tsx     # Entry point
├── server/          # Express backend
│   ├── index.ts     # Server entry, middleware setup
│   ├── routes.ts    # API endpoint definitions
│   ├── storage.ts   # Database abstraction layer (IStorage pattern)
│   └── db.ts        # Drizzle client initialisation
├── shared/          # Shared between client and server
│   └── schema.ts    # Drizzle schema + Zod validation
└── migrations/      # Database migration files
```

**Path Aliases:**
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

## Architecture

### Monorepo Full-Stack Pattern

Single repository with three distinct code areas sharing TypeScript types. The Express server serves both the API (`/api/*`) and static frontend files in production.

### Database Layer

**Pattern:** Repository pattern with `IStorage` interface abstraction in `server/storage.ts`

**Schema Location:** `shared/schema.ts` - single source of truth for all data models using Drizzle ORM

**Key Tables:**
- `students` - Student profiles with points, streaks, avatar
- `badges` - Achievement badge definitions with categories/levels
- `studentBadges` - Junction table for earned badges
- `paperCompletions` - Exam paper completion tracking with scores
- `videoCompletions` - Video lesson progress with watch percentage
- `inquiries` - Contact form submissions
- `subscribers` - Newsletter email list

**Important:** All schema changes must be made in `shared/schema.ts` followed by `npm run db:push` to sync with database.

### API Structure

All endpoints in `server/routes.ts` follow consistent response format:
```typescript
{ success: boolean, message?: string, data?: any }
```

**Key Endpoints:**
- `POST /api/inquiries` - Contact form submission
- `POST /api/subscribers` - Newsletter subscription
- `GET /api/leaderboard` - Top students by points
- `POST /api/paper-completions` - Record exam completion (auto-awards points/badges)
- `POST /api/video-completions` - Record video completion (auto-awards points/badges)
- `POST /api/paper-notes` - Save AI-generated study notes
- `GET /api/download/:examBoard/:subject/:filename` - Download past papers

### Gamification System

**Points System:**
- Base: 10 points for papers, 25 for videos
- Bonuses: +5 for 60%+, +10 for 75%+, +15 for 90%+ scores
- A-level bonus: +5 points
- Video watch bonuses: +5 for 75%+, +10 for 95%+

**Badge Auto-Award Logic:** Located in `server/storage.ts`
- `checkForCompletionBadges()` - Awards badges based on paper completions
- `checkForVideoCompletionBadges()` - Awards badges based on video milestones
- Called automatically after recording completions

**Streak Tracking:** `updateStudentStreak()` maintains daily activity streaks with intelligent date comparison

### Frontend Architecture

**Routing:** Wouter (lightweight alternative to React Router)
- Routes defined in `client/src/App.tsx`
- All routes wrapped with Header + Footer layout

**State Management:**
- Server state: TanStack Query (React Query) for caching/mutations
- Language preferences: React Context (`LanguageContext`)
- UI state: Local `useState` hooks
- No global state library (Redux/Zustand)

**Component Organisation:** Feature-based folders in `client/src/components/`:
- `home/` - Landing page components
- `gamification/` - Achievement system, leaderboard, badges
- `pastpapers/` - Exam paper browser with note generation
- `layout/` - Header, Footer, navigation
- `ui/` - Radix UI primitives (buttons, dialogs, etc.)

### Authentication Status

**Current:** NO authentication implemented. Student ID is hardcoded (`studentId={1}`).

**Dependencies Present But Unused:**
- `passport` and `passport-local` installed
- `express-session` configured but not active
- Session middleware not connected

**Implication:** The gamification features currently work with mock data. This is a development/prototype state awaiting full authentication implementation.

## Important Development Notes

### Language and Spelling

**ALL text must use British English spelling:** colour, organisation, specialise, personalise, realise, analyse, behaviour, etc.

**Exception:** Web standard API properties like `behavior: 'smooth'` for `scrollIntoView()` remain unchanged.

### Design System

- **Hexagon theme throughout** - matches The Study Hive branding
- **Pill-shaped buttons** (not fully rounded) - use border-radius consistent with design
- **Subject colour-coding:** Teal (Biology), Purple (Chemistry), Orange (Physics)
- **Typography:** Playfair Display (headings), Montserrat (body)
- **Component library:** Radix UI for accessible primitives

### Content Guidelines

- Target audience: UK students aged 11-18 (KS3/GCSE/A-Level)
- Video sources: Only The Study Hive YouTube channel
- Videos must be embedded (not YouTube redirects)
- Past papers: Years 2018-2024, Summer and January exams
- Past paper links: Direct download access required

### File Download Implementation

The download endpoint (`/api/download/:examBoard/:subject/:filename`) auto-generates sample PDFs using PDFKit if files don't exist in `attached_assets/`. For production, ensure actual past papers are uploaded to this directory.

### Windows-Specific Adjustments

The server uses cross-platform compatibility fixes:
- `reusePort` option conditionally applied (not supported on Windows)
- Path normalisation middleware to prevent backslash exploits
- See `server/index.ts` and `vite.config.ts` for implementation details

### Security Considerations

- File download paths sanitised using `path.basename()` to prevent directory traversal
- All API inputs validated with Zod schemas
- Vite dev server has strict FS access rules (see `vite.config.ts`)
- CORS credentials enabled for future authentication support

### Database Migrations

When modifying `shared/schema.ts`:
1. Make schema changes
2. Run `npm run db:push` to sync with database
3. Review generated migration in `migrations/` folder
4. Test locally before deploying

Drizzle config location: `drizzle.config.ts`

### Type Safety

- TypeScript strict mode enabled
- Shared schemas provide type safety between frontend/backend
- Drizzle ORM auto-generates TypeScript types from schema
- Zod validation schemas created from Drizzle schemas via `createInsertSchema()`

## Testing

**Current Status:** No test framework configured. The project has TypeScript type checking only (`npm run check`).

To add tests, consider:
- Vitest (native Vite integration)
- React Testing Library (component tests)
- Supertest (API endpoint tests)

## Deployment Notes

- Environment variable required: `DATABASE_URL` (Neon PostgreSQL connection string)
- Build command: `npm run build` (builds both frontend + backend)
- Start command: `npm start` (serves from `dist/` folder)
- Static files served from `dist/public/`
- API runs on same port as frontend (no CORS issues)
- Multi-platform support (tested on Linux and Windows)

## Git Commit Conventions

Commits should follow the format specified in `.github/git-commit-instructions.md`:
- Start with verb (imperative mood)
- Use two-part format: `fix: [description]` and `feat: [description]` on separate lines
- Examples from history:
  - "fix: update project to support multi-platform execution"
  - "feat: display running URL and update Vite to 5.4.21"
