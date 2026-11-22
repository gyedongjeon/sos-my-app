---
title: "feat: add Russian"
date: 2026-11-22
branch: feat/russian
request-source: chat session, 2026-11-22
---

## Request

Add a Russian version of the site, prepared ahead of time. Russian was added to both apps as a
feedback language (sos-my-english#28, sos-my-interview#17), but neither app has released it yet.

**Merge only after both apps have released a version with Russian.** Until then, the Russian
page's promise that explanations come in Russian is not true for anyone who downloads an app.

## Changes

- `src/locales/ru.ts`: the Russian text, adapted from the English and Korean text. As in every
  language, "explanations in your language" names Russian, and the practice stays in English.
  The rescue lines are "Подайте сигнал SOS." and "Помощь уже в пути."; résumé is "резюме", and
  "shadowing" keeps the English word in brackets, as other languages do.
- `src/i18n.ts`: Russian registered as `ru` (`Русский`, `hreflang="ru"`, `og:locale` `ru_RU`),
  listed after Portuguese, the same place it has in the apps' language list.
- `README.md`: Russian added to the list of languages.

## Verification

- `npm run build`: `astro check` 0 errors, 0 warnings; 40 pages built (13 languages × home and two
  app pages, plus `404`).
- `src/locales/ru.ts` keeps the facts and names of the English text: 40 topics, 9 categories,
  100 patterns, A1 to C2, 64-bit, "macOS (Apple Silicon)", Google Gemini, MIT, and the app names.
- `dist/ru/index.html` has the Russian heading, and every page lists `hreflang="ru"`.
- Not verified: the translation by a native speaker; the pages in a browser.
