# xiuyi_Portfolio — Agent Guide

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
- **No router**: Single-page scroll sections with anchor links (`#hero`, `#experience`, `#projects`, `#strengths`, `#contact`)
- **Max-width**: 1700px for PC layout
- **Theme**: Dark (#0a0a0a bg), white text, subtle borders

## Static assets
- **Public directory**: Place static files (SVG, images) in `public/` for direct access
- **Import pattern**: Use `src="/filename.svg"` for files in `public/`
- **Avoid**: Do not place static assets in `src/assets/` unless importing via JS modules

## Deployment
- **Vercel**: Auto-deploys from GitHub main branch
- **Build**: `tsc && vite build`
- **Node**: 22.2.0 (works with warnings)
