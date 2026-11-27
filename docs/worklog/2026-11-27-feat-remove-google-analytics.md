---
title: "feat: remove Google Analytics and its consent banner"
date: 2026-11-27
branch: feat/remove-google-analytics
request-source: chat session, 2026-11-27
---

## Request

Remove Google Analytics, added earlier the same day (#12), and keep Cloudflare Web Analytics.
Running Google Analytics from Germany in practice also calls for a privacy policy and an imprint
with a postal address, which the site should not publish.

## Changes

- **Removed**: `src/components/ConsentBanner.astro`, the Google Analytics measurement ID in
  `src/data/analytics.ts`, the footer's "Cookie settings" button, and the five `consent*` keys in
  `src/locales/types.ts` and all 19 languages.
- **Kept**: the Cloudflare Web Analytics beacon in `src/layouts/Base.astro`. It sets no cookies
  and does not track visitors across sites, so it needs no banner.
- **AGENTS.md**: the Scope rule now names Cloudflare Web Analytics as the only analytics tool and
  rules out Google Analytics and other cookie-based or cross-site tracking, with the reason.
- **Not done**: visitors who allowed Google Analytics while #12 was live keep their `_ga` cookies
  until they expire; the site no longer reads them. The Google Analytics property itself can be
  deleted in its admin screen; that is outside the repository.

## Verification

- `npm run build`: `astro check` 0 errors, 0 warnings, 0 hints.
- No `consent`, `gaMeasurementId`, or `googletagmanager` left in `src/` or `dist/`; `dist/index.html`
  still carries the Cloudflare beacon.
