---
title: "feat: serve the site in twelve languages"
date: 2026-11-22
branch: feat/more-languages
request-source: chat session, 2026-11-22
---

## Request

Add major world languages to the site, which was in Korean and English only.

## Changes

- **Languages**: the twelve languages the SOS apps give feedback in (`LANGUAGES` in both apps'
  `frontend/src/stores/settings.ts`): Korean, English, Japanese, Simplified Chinese,
  Traditional Chinese, Spanish, French, German, Portuguese, Vietnamese, Indonesian, and Hindi.
  Matching the apps keeps the site's promise ("explanations in your language") true for every
  language it is shown in. Arabic and other right-to-left languages were left out: the apps do
  not offer them, and the layout would need right-to-left work.
- **Structure first (`refactor:` commit)**: all text moved from `src/i18n.ts` and
  `src/data/apps.ts` into one file per language, `src/locales/<locale>.ts`, typed by
  `src/locales/types.ts`, so a language missing a key fails `astro check`. The non-default
  languages are served by `src/pages/[locale]/index.astro` and `[locale]/[app].astro` instead of
  a copied page per language. The built site was compared with `main` and was byte-for-byte the
  same.
- **URLs**: Korean stays at `/` so the links already live keep working; every other language is
  under `/<locale>/` (`/en/`, `/ja/`, `/zh-hans/`, `/zh-hant/`, `/es/`, `/fr/`, `/de/`, `/pt/`,
  `/vi/`, `/id/`, `/hi/`). Each page lists all twelve as `hreflang` alternates, with BCP 47
  tags (`zh-Hans`, `zh-Hant`) and Open Graph locales.
- **Language menu**: the English/Korean toggle became a dropdown (a `<details>` element, so
  still no JavaScript) listing each language in its own name, the current one highlighted like
  the current page in the navbar.
- **Translations**: written per language from the English and Korean text, adapting rather than
  translating word for word. In each language, "explanations in your language" names that
  language, as the Korean text does; the practice stays in English. Regional choices: Spanish is
  neutral between Spain and Latin America, Portuguese is Brazilian, Traditional Chinese uses
  Taiwan wording, and German uses "du".
- **Line breaking**: `word-break: keep-all` now applies to Korean only. It was set on the whole
  page, which would have stopped Japanese and Chinese text from wrapping.
- **Docs**: `README.md` and `AGENTS.md` describe the locale files, how to add a language, and
  that every language is updated in the same PR when the copy changes.

## Verification

- `npm run build`: `astro check` 0 errors, 0 warnings; 37 pages built (12 languages × home and
  two app pages, plus `404`).
- Every locale file checked to keep the facts and names of the English text: 40 topics,
  9 categories, 100 patterns, A1 to C2, 64-bit, "macOS (Apple Silicon)", Google Gemini, MIT,
  and the app names.
- Read the Japanese file in full.
- Looked at screenshots from headless Chrome: the Japanese home and the Simplified Chinese
  `english` page at 1280px, the French home with the language menu open, and the Hindi
  `interview` page and German home at 390px. Devanagari, CJK, and accented Latin text render,
  and no page scrolls sideways. The first screenshots showed the language button invisible on
  the navy header (daisyUI's `btn-ghost` sets a dark text color); it now uses the header's text
  color.
- Not verified: the translations by native speakers, and the open menu at phone width.
