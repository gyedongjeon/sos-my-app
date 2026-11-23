---
title: Add a sitemap and robots.txt
date: 2026-11-23
branch: feat/sitemap
request-source: Claude Code session, 2026-11-23
---

## Request

Add a sitemap to the site.

## Changes

- Add the `@astrojs/sitemap` integration. The build writes `sitemap-index.xml` and `sitemap-0.xml`, listing every page in every language (19 languages × 4 pages = 76 URLs). The `/en/*` redirects and the 404 page are left out.
- Add `public/robots.txt`, allowing all crawlers and pointing to `https://sosmy.app/sitemap-index.xml`.
- Add `<link rel="sitemap">` to the shared layout's `<head>`.
- The sitemap's `i18n` option was not used: every page already lists its language alternates with `hreflang` links in `<head>`, so repeating them in the sitemap adds nothing.

## Verification

- `npm run build` passes (type check and build, 77 pages).
- `dist/sitemap-0.xml` holds 76 URLs, all with the `https://sosmy.app` origin and trailing slash; no `/en/` or 404 URLs.
- `dist/robots.txt` and the `<link rel="sitemap">` in `dist/index.html` are present.
- No visible page changes, so no layout check was needed.
