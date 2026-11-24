---
title: "feat: replace SOS My English and SOS My German with SOS My Language"
date: 2026-11-24
branch: feat/language
request-source: chat session, 2026-11-24
---

## Request

SOS My English and SOS My German were merged into one app,
[SOS My Language](https://github.com/gyedongjeon/sos-my-language). Update the site to list it in
place of the two.

## Changes

- **App data**: `src/data/apps.ts` has one `language` entry (repository, icon, screenshots) in
  place of `english` and `german`. Its icon is the app's `desktop/assets/icon.svg` (the same as
  SOS My English's), copied to `src/assets/icons/language.svg`. The two old icons and four
  screenshots are removed.
- **Pages**: `src/pages/language.astro` serves `/language/`; `/<locale>/language/` comes from the
  existing `[locale]/[app].astro`. `english.astro` and `german.astro` are removed.
- **Redirects** (`astro.config.mjs`): `/english/`, `/german/`, `/en/english/`, and
  `/<locale>/english/` and `/<locale>/german/` for every other language now go to the matching
  `/language/` page, so old links keep working. Redirect pages are `noindex` and not in the
  sitemap.
- **Screenshots**: the app's `docs/images/conversation.png`, `language.png` (choosing English or
  German), and `home.png` on `main`, copied to `src/assets/screens/language-*.png`. The
  conversation screen comes first, so it is the home card's preview.
- **App copy, in all 19 languages**: `apps.language` follows the app's README. It is the old
  `apps.english` with:
    - the tagline and summary covering English and German;
    - a new first feature, "Several languages in one app";
    - the sentence-pattern feature saying "in the language you practise" instead of "in English";
    - alt text for the three new screenshots.
- **Shared copy**: unchanged; it already names English and German.
- **Docs**: `README.md` and `AGENTS.md` list SOS My Language and its `/language` path.

## Verification

- `npm run build`: `astro check` 0 errors, 0 warnings; 57 pages in the sitemap (19 languages ×
  home, interview, language). `dist/ko/english/index.html` redirects to `/ko/language/`.
- No `apps.language` block names only English (grep for "English" in every locale's
  language).
- Screenshots from headless Chrome: the English home page at 1280px and 390px, the English
  language page at 1280px, and the Korean language page at 390px. Both cards and their previews
  show, the language page shows all three screenshots, the header fits, and nothing scrolls
  sideways.
- The SOS My Language repository and its latest release (v0.1.0, macOS Apple Silicon and
  Windows) answer 200.
- Not verified: the translated copy by a native speaker of each language.
