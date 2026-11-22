---
title: "feat: list Windows for SOS My Interview"
date: 2026-11-22
branch: feat/interview-windows
request-source: chat session, 2026-11-22
---

## Request

A Windows version of SOS My Interview is being added. Update its page
(https://sosmy.app/interview/ and the same page in every language) to say it runs on Windows.

**Merge once a SOS My Interview release includes the Windows installer.** Until then, the
download button leads to a release without one.

## Changes

- In every file in `src/locales/` (19 languages), `apps.interview.platforms` is now the same as
  `apps.english.platforms`: "macOS (Apple Silicon)" and Windows (64-bit), reusing each language's
  existing wording for Windows (e.g. "Windows (64비트)", "Windows (64 บิต)"). The change was made
  with a small script that copied the second line over the first in each file, and stopped if a
  file did not have exactly two `platforms` lines.
- Nothing else on the page names a platform, so no other text changed.

## Verification

- `npm run build`: `astro check` 0 errors, 0 warnings; 58 pages built.
- `git diff`: 19 files, one line each, and only the interview `platforms` line.
- In `dist/`, the interview page shows two platform badges in English ("Windows (64-bit)"),
  Korean ("Windows (64비트)"), and Thai ("Windows (64 บิต)").
- Not verified: the SOS My Interview Windows installer itself, which is not released yet.
