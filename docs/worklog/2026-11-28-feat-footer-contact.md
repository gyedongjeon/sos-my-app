---
title: "feat: add a contact email to the footer"
date: 2026-11-28
branch: feat/footer-contact
request-source: chat session, 2026-11-28
---

## Request

Add the address contact@sosmy.app to the site footer.

## Changes

- **`src/layouts/Base.astro`**: the footer's link list now ends with a `mailto:contact@sosmy.app`
  link, styled like the app repository links before it (`link link-hover`).
- **Locales**: unchanged. The address reads the same in every language, so it is not a
  translatable string.

## Verification

- `npm run build`: `astro check` passed and 77 pages built.
- `dist/index.html`, `dist/ko/index.html`, and `dist/feed/index.html` contain the
  `mailto:contact@sosmy.app` link.
- **Not done**: the browser check at desktop and phone widths. Chrome could not load the local
  preview server, although `curl` got a 200 from it.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
