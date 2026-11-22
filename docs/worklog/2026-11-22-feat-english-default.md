---
title: "feat: make English the default language"
date: 2026-11-22
branch: feat/english-default
request-source: chat session, 2026-11-22
---

## Request

Opening https://sosmy.app/ showed the Korean site; the site should open in English by default.

## Changes

- `defaultLocale` is now `en`: English is served at `/`, `/interview/`, and `/english/`, and
  Korean moved to `/ko/`, like every other language. `x-default` in the `hreflang` links points
  to the English pages.
- The pages in `src/pages/` use `defaultLocale` instead of naming Korean, so a later change of
  default is one line.
- English is listed first in the language menu, then Korean, then the rest.
- `404` leads with English and keeps a Korean line and link under it.
- The English pages were served under `/en/` for a short time after the previous merge, so
  `/en/`, `/en/interview/`, and `/en/english/` now redirect to the root pages (Astro
  `redirects`, which writes a page with a meta refresh and a canonical link).
- The site still does not pick a language from the browser: every visitor starts in English and
  can switch in the menu.
- `README.md` and `AGENTS.md` updated to say English is at the root.

## Verification

- `npm run build`: `astro check` 0 errors, 0 warnings; 37 pages built, plus the three redirect
  pages.
- In `dist/`: `index.html` and `interview/index.html` have `lang="en"` and the English
  headings; `ko/index.html` and `ko/interview/index.html` have `lang="ko"` and the Korean
  headings; `404.html` is English first; `x-default` is `https://sosmy.app/`; the `en/` pages
  hold a meta refresh to the matching root page.
- Not verified: the deployed site, until this is merged.
