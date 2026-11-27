---
title: "feat: add Google Analytics behind a consent banner"
date: 2026-11-27
branch: feat/analytics
request-source: chat session, 2026-11-27
---

## Request

Add Google Analytics to the site. Since the site serves EU languages and is run from the EU,
ask visitors for consent before any analytics data is collected (GDPR, German TTDSG §25).

## Changes

- **Measurement ID**: `src/data/analytics.ts` holds the GA4 measurement ID. It is public by
  design (it appears in every page's HTML), so it is committed as a constant. No Measurement
  Protocol API secret is used or stored.
- **Consent banner** (`src/components/ConsentBanner.astro`, included by `src/layouts/Base.astro`):
    - Shown at the bottom of every page until the visitor chooses Allow or Decline. The choice is
      kept in `localStorage` (`sos-analytics-consent`); no cookie is set for it.
    - Google's tag (`gtag.js`) is loaded only after Allow ("basic" consent mode): before that, no
      request goes to Google. Ad storage, ad user data, and ad personalization stay denied.
    - A "Cookie settings" button in the footer reopens the banner. Declining after allowing
      updates consent to denied and deletes the `_ga*` cookies.
    - The tag is loaded only in production builds, so `npm run dev` never reports to Analytics.
    - The banner links to Google's page on how it uses data from partner sites, in the page's
      language.
- **Copy, in all 19 languages**: five new `ui` keys (`consentText`, `consentLearnMore`,
  `consentAllow`, `consentDecline`, `consentSettings`).
- **AGENTS.md**: the Scope rule now records the analytics setup and that it must stay behind
  consent.
- **Alternatives considered**: consent mode with cookieless pings and no banner (still sends data
  to Google before consent, which is contested under the TTDSG), and installing without consent
  (rejected). A cookieless tool such as Cloudflare Web Analytics would avoid the banner; kept as a
  possible later change.
- **Not included**: a privacy policy page and an imprint (Impressum). The banner states what is
  collected, but a full privacy policy is still recommended.
- **Tests**: the project has no test runner; the consent logic is a small DOM script, verified in
  the browser instead of adding a test framework for it.

## Verification

- `npm run build`: `astro check` 0 errors, 0 warnings, 0 hints; 77 pages built.
- The built pages carry `data-ga-id="G-LEDL7J8DT3"`; the Chinese pages link Google's policy with
  `hl=zh-CN` / `hl=zh-TW`.
- Checked in the browser on `npm run preview` (`/de/`): the banner shows on first visit.
