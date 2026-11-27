---
title: "feat: make the site easier for language models to read"
date: 2026-11-27
branch: feat/llm-friendly
request-source: chat session, 2026-11-27
---

## Request

Make the site LLM-friendly.

## Changes

The site already served static HTML with no client-side rendering, a `robots.txt` allowing all
crawlers, a sitemap, and hreflang alternates. This adds the two things it lacked:

- **`/llms.txt`** ([llmstxt.org](https://llmstxt.org)): `src/pages/llms.txt.ts` serves the
  output of `llmsTxt()` in `src/lib/llms.ts`. It is built from the English locale and
  `src/data/apps.ts`: the site summary, the shared points, a list of the app pages, then one
  section per app (tagline, summary, features, platforms, privacy, the API key note when the app
  needs one, and links to its page, latest release, and repository), and the other languages
  under `## Optional`. English only: the file is for models, and every page it links to has its
  hreflang alternates.
- **Structured data**: `src/lib/jsonld.ts` builds schema.org JSON-LD, which `Base.astro` renders
  from a new optional `jsonLd` prop. The home page describes the site as a `WebSite`; each app
  page describes its app as a `SoftwareApplication` (category, platforms, download URL, MIT
  license, free offer, repository as `sameAs`), in the page's language. `<` is escaped so the
  JSON cannot close its script tag. `src/data/apps.ts` gained `category`
  (`EducationalApplication` for SOS My Interview and SOS My Language, `UtilitiesApplication` for
  SOS My Feed). Google shows rich results for software only with ratings, which the apps do not
  have; the data is still read by search engines and models.
- **Tests**: `npm test` runs Node's built-in test runner over `tests/*.test.ts` (Node 24 strips
  the types), with no new dependency. Both helpers were written test-first and import no Astro
  modules, so they run outside Astro.
- **AGENTS.md**: records the two outputs and `npm test`.
- **Considered and not done**: Markdown copies of every page (`/index.md`), since `llms.txt`
  already holds all of the site's English copy; AI-crawler rules in `robots.txt`, since it
  already allows every crawler.

## Verification

- `npm test`: 8 tests pass (5 for `llms.txt`, 3 for JSON-LD).
- `npm run build`: `astro check` 0 errors, 0 warnings, 0 hints; `dist/llms.txt` is built and
  read through.
- `dist/index.html` carries the `WebSite` JSON-LD; `dist/ko/feed/index.html` carries the
  `SoftwareApplication` JSON-LD with Korean description and platforms; `dist/404.html` carries
  none.
