---
title: "feat: add Turkish, Italian, Polish, Ukrainian, Thai, and Bengali"
date: 2026-11-22
branch: feat/six-languages
request-source: chat session, 2026-11-22
---

## Request

Add six more languages to the site, prepared ahead of time while the same languages are being
added to both apps as feedback languages: Turkish, Italian, Polish, Ukrainian, Thai, and
Bengali. They were picked for the demand for learning English in those languages and for their
number of speakers; all six are written left to right, so they need no layout work. Arabic was
left for separate work, since it needs right-to-left support in the site and the apps.

**Merge only after both apps have released a version with these languages.** Until then, the
promise on these pages that explanations come in that language is not true for anyone who
downloads an app.

## Changes

- `src/locales/{tr,it,pl,uk,th,bn}.ts`: the text in each language, adapted from the English,
  Korean, and Russian text. As in every language, "explanations in your language" names that
  language, and the practice stays in English. Register choices: Turkish "sen", Italian "tu",
  Polish "ty", Ukrainian "ви", Thai polite, Bengali "আপনি" in standard Bengali for both
  Bangladesh and West Bengal. AI is "yapay zekâ" (Turkish), "IA" (Italian), and "ШІ"
  (Ukrainian).
- The Bengali hero heading was reworded after review, from a Hindi-style idiom to
  "ইংরেজিতে আটকে যাচ্ছেন?" ("stuck in English?"), which the page description already uses.
- `src/i18n.ts`: the six registered with their names, `hreflang` tags, and Open Graph locales,
  after Hindi in the language menu.
- `README.md`: the six added to the list of languages.

## Verification

- `npm run build`: `astro check` 0 errors, 0 warnings; 58 pages built (19 languages × home and
  two app pages, plus `404`).
- Each new file keeps the facts and names of the English text: 40 topics, 9 categories,
  100 patterns, A1 to C2, 64-bit, "macOS (Apple Silicon)", Google Gemini, MIT, and the app names.
- Scripts checked: no Bengali, Cyrillic, or Devanagari letters in the Thai file; Bengali uses
  only its own script and the danda; the Ukrainian file has none of the Russian-only letters
  (ы, э, ъ, ё).
- Looked at the Thai `english` page and the Bengali home at 390px: both scripts render, the
  language button shows the language's own name, and nothing scrolls sideways.
- Not verified: the translations by native speakers.
