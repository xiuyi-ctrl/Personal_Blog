# Personal Blog — Agent Guide

## Commands
- `npm run dev` — start dev server (Vite)
- `npm run build` — typecheck + production build (`tsc && vite build`)
- `npm run preview` — preview production build

## Architecture

- **Stack**: React 19 + TypeScript 6 + Vite 8 + Tailwind CSS v4
- **Entry**: `src/main.tsx` → `src/App.tsx`
- **Layout**: `LanguageProvider` wraps the entire app; all text reads from `useLanguage()` hook
- **Max-width**: 1700px for PC layout

## Project Structure

```
src/
  components/   — 6 section components (Header, Hero, Experience, Projects, Strengths, Contact)
  data/         — Static data (projects.ts, skills.ts)
  i18n/         — Translations (en/zh) + LanguageContext
  App.tsx       — Root layout, imports all sections
  main.tsx      — Entry point
  style.css     — Tailwind v4 import + smooth scroll
```

## Key Conventions

- **Tailwind v4**: Use `@import "tailwindcss"` in CSS (not `@tailwind` directives). Plugin is `@tailwindcss/vite` in `vite.config.ts`.
- **i18n**: All text goes through `useLanguage()` hook from `src/i18n/LanguageContext.tsx`. Translations live in `src/i18n/translations.ts`. Never hardcode display text.
- **Data**: Static data in `src/data/` (projects, skills). Import directly, no API calls.
- **TypeScript**: `verbatimModuleSyntax` requires `import type` for type-only imports. `noUnusedLocals`/`noUnusedParameters` are strict.
- **Tailwind v4**: Uses `@import "tailwindcss"` in CSS (not `@tailwind` directives). Plugin is `@tailwindcss/vite`.
- **Build**: `npm run build` runs `tsc && vite build`. TypeScript errors block the build.
- **Layout**: Max-width 1700px for PC. Dark theme `#0a0a0a` background.
- **i18n**: All text via `useLanguage()` hook. Translations in `src/i18n/translations.ts`.
- **Node version**: Requires Node.js 20.19+ or 22.12+. Current is 22.2.0 (below requirement, but works with warnings).
- **Windows native binding**: `@rolldown/binding-win32-x64-msvc` must be installed explicitly for Vite 8 on Windows.</think>

<｜DSML｜tool_calls>
<｜DSML｜invoke name="write">
<｜DSML｜parameter name="content" string="true"># Personal Blog — Agent Guide

## Commands
- `npm run dev` — start Vite dev server
- `npm run build` — typecheck + production build (`tsc && vite build`)
- `npm run preview` — preview production build

## Stack
- React 19 + TypeScript 6 + Vite 8 + Tailwind CSS v4
- Tailwind v4: use `@import "tailwindcss"` in CSS (not `@tailwind` directives). Plugin is `@tailwindcss/vite` in `vite.config.ts`.
- TypeScript 6 with `verbatimModuleSyntax` — use `import type` for type-only imports
- `noUnusedLocals` / `noUnusedParameters` are strict — remove unused imports and variables

## Architecture
- **Entry**: `src/main.tsx` → `src/App.tsx`
- **Layout**: `LanguageProvider` wraps the app; all text via `useLanguage()` hook
- **Translations**: `src/i18n/translations.ts` — en/zh, all display text must go through this
- **Data**: Static TS files in `src/data/` (projects, skills)
- **Components**: 6 section components in `src/components/`
- **Max-width**: 1700px for PC layout
- **Theme**: Dark (#0a0a0a bg), white text, subtle borders/accents

## Key quirks
- **Tailwind v4**: Use `@import "tailwindcss"` in CSS (not `@tailwind` directives). Plugin is `@tailwindcss/vite` in `vite.config.ts`.
- **TypeScript 6**: `verbatimModuleSyntax` requires `import type` for type-only imports. `noUnusedLocals`/`noUnusedParameters` are strict.
- **Windows native binding**: Vite 8 uses rolldown; `@rolldown/binding-win32-x64-msvc` must be in dependencies for Windows builds.
- **Node version**: Requires 20.19+ or 22.12+. Current 22.2.0 works with warnings.
- **No router**: Single-page scroll sections with anchor links (`#hero`, `#experience`, `#projects`, `#strengths`, `#contact`).
- **No external i18n lib**: Custom React Context (`LanguageProvider` + `useLanguage()`).
- **Max-width**: 1700px for PC layout.</think>

<｜DSML｜tool_calls>
<｜DSML｜invoke name="write">
<｜DSML｜parameter name="content" string="true"># Personal Blog — Agent Guide

## Commands
- `npm run dev` — start Vite dev server
- `npm run build` — typecheck + production build (`tsc && vite build`)
- `npm run preview` — preview production build

## Stack
React 19 + TypeScript 6 + Vite 8 + Tailwind CSS v4

## Key quirks
- **Tailwind v4**: Use `@import "tailwindcss"` in CSS (not `@tailwind` directives). Plugin is `@tailwindcss/vite` in `vite.config.ts`.
- **TypeScript 6**: `verbatimModuleSyntax` → `import type` for type-only imports. `noUnusedLocals`/`noUnusedParameters` are strict.
- **Windows**: Vite 8 uses rolldown; `@rolldown/binding-win32-x64-msvc` must be in dependencies for Windows builds.
- **Node**: Requires 20.19+ or 22.12+. Current 22.2.0 works with warnings.

## Architecture
- **Entry**: `src/main.tsx` → `src/App.tsx`
- **Layout**: `LanguageProvider` wraps app; all text via `useLanguage()` hook
- **i18n**: `src/i18n/translations.ts` (en/zh). No external i18n library.
- **Data**: Static TS files in `src/data/` (projects, skills)
- **Components**: 6 section components in `src/components/`
- **No router**: Single-page scroll sections with anchor links
- **Max-width**: 1700px for PC layout
- **Theme**: Dark (#0a0a0a bg), white text, subtle borders

## Commands
- `npm run dev` — start dev server
- `npm run build` — typecheck + production build
- `npm run preview` — preview production build
