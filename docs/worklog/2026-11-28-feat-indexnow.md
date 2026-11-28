---
title: "feat: submit the site's pages to IndexNow after each deploy"
date: 2026-11-28
branch: feat/indexnow
request-source: chat session, 2026-11-28
---

## Request

Set up IndexNow for the site.

## Changes

- **Key file**: `src/data/indexnow.ts` holds a random 32-character key, and `src/pages/[key].txt.ts`
  serves it at `/<key>.txt`. IndexNow keys are public by design, because search engines verify a
  submission by fetching that file, so committing the key does not break the rule against secrets.
  The key file is not an HTML page, so it is not in the sitemap.
- **Logic**: `src/lib/indexnow.ts` has `sitemapUrls` (the `<loc>` URLs in a sitemap, with XML
  entities decoded) and `indexNowBody` (the JSON body for `api.indexnow.org`). Both were written
  test-first in `tests/indexnow.test.ts`.
- **Submission**: `scripts/indexnow.ts` checks that the live key file matches, reads
  `sitemap-index.xml` and its sitemaps from `https://sosmy.app`, and POSTs every URL to
  `https://api.indexnow.org/indexnow`. HTTP 200 and 202 count as success.
- **Workflow**: a new `indexnow` job in `.github/workflows/deploy.yml` runs the script after
  `deploy` on pushes to `main`, but not on pull requests. It uses `continue-on-error`, so a failed
  submission is reported without marking the deploy as failed.
- **AGENTS.md**: a new **Search engines** rule describes the sitemap and IndexNow setup and why the
  key is not a secret.
- **Decisions**:
  - The script reads the live sitemap instead of rebuilding the site in the job, so it submits
    exactly what was deployed.
  - Every deploy submits all URLs (76 now), not only the changed ones. The site is small, and
    working out which pages changed would need a diff of the built output.
- **Not covered**: Google does not use IndexNow. Google Search Console takes the sitemap
  separately, and that setup is outside the repository.

## Verification

- `npm test`: 11 tests pass, 3 of them new.
- `npm run build`: `astro check` reported 0 errors, 0 warnings, and 0 hints.
- `dist/a0860f91355d569a1cda3b2fbc57d229.txt` contains the key, and `dist/sitemap-0.xml` lists 76
  URLs, none of them the key file.
- Ran `node scripts/indexnow.ts` against the live site. It stopped at the key check (the key file
  returns 404 until this deploys), so nothing was submitted. The first real submission happens on
  the deploy after merging, in the `indexnow` job's log.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
