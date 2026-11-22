---
title: "feat: add SOS My German"
date: 2026-11-22
branch: feat/german
request-source: chat session, 2026-11-22
---

## Request

A third app, [SOS My German](https://github.com/gyedongjeon/sos-my-german), joined the SOS
series. Add it to the site.

## Changes

- **App data**: `src/data/apps.ts` has a `german` entry (repository, icon). Its icon is the app's
  `desktop/assets/icon.svg`, copied to `src/assets/icons/german.svg`. A new default-language
  page, `src/pages/german.astro`, serves `/german/`; the other languages get `/<locale>/german/`
  from the existing `[locale]/[app].astro`. The header and footer list the app on their own.
- **No screenshots yet**: the app's repository has none (`docs/images/` is empty), so `images` is
  empty. The app page leaves out its screenshot section, and the home card its preview, when an
  app has no screenshots. Add them to `src/assets/screens/` once the app has some.
- **App copy, in all 19 languages**: follows the app's README, which describes it as SOS My
  English for German. Each locale's `apps.german` is its `apps.english` with English changed to
  German in the tagline, summary, and the sentence-pattern feature; the remaining features and
  platforms (macOS (Apple Silicon), Windows (64-bit), both in the v0.1.0 release) are the same.
- **Shared copy, in all 19 languages**: text that said the series is for English now covers
  both languages:
    - `siteDescription` and `heroLead` name English and German; `heroLead` no longer says the
      AI fixes "your English" but your mistakes.
    - `heroTitle` "English letting you down?" is now "Language letting you down?" (in each
      language, "language" or "foreign language").
    - The "Explained in your language" card says the practice stays in the language you are
      learning, not in English.
    - `commonTitle` no longer says "two"/"both" apps in Korean, Japanese, Chinese, German,
      Hindi, Indonesian, and Vietnamese.
- **Docs**: `README.md` and `AGENTS.md` list the new app and its `/german` path.

## Verification

- `npm run build`: `astro check` 0 errors, 0 warnings; 77 pages built (58 before).
- No `apps.german` block in any locale still mentions English (checked with a grep for the word
  "English" in all 19 languages).
- Screenshots from headless Chrome of the English home page and the Korean German page at
  1280px, and the English home and German pages at 390px: the home page shows three cards (the
  German one without a preview), the German page has no empty screenshot section, the header
  fits the three apps, and there is no horizontal scrolling.
- The German repository, its latest release, and its `README.ko.md` answer 200.
- Not verified: the translated copy by a native speaker of each language.
