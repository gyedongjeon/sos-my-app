---
title: "docs: add git workflow and agent instructions"
date: 2026-11-22
branch: docs/git-workflow
request-source: chat session, 2026-11-22
---

## Request

As the first branch of `sos-my-app`, the website introducing the SOS apps (`sos-my-interview`,
`sos-my-english`), set up the same working rules as `sos-my-english`: commit and PR conventions,
branching, the worklog, and an `AGENTS.md` for AI assistants.

## Changes

- **Copied from `sos-my-english`**, with links to its versioning document removed:
  `docs/git-workflow/commit-convention.md`, `docs/git-workflow/pr-convention.md`,
  `docs/worklog/_template.md`, and `.github/PULL_REQUEST_TEMPLATE.md`.
- **Adapted `branching-strategy.md`**: GitHub Flow and `--no-ff` merge commits are unchanged, but
  releasing by tags was replaced by a **Deployment** section, because the site is deployed to
  GitHub Pages on every push to `main`. A bad deploy is undone by a revert PR.
- **Left out `versioning.md`**: a website has no installed copies, saved data, or version files,
  so Semantic Versioning and release tags would add process without a reader.
- **New `AGENTS.md`** with the same structure as `sos-my-english`:
    - Development method keeps Tidy First; TDD applies only to code with logic, since most
      changes are markup and copy. Every commit must pass `npm run build`, and changed pages are
      looked at in desktop and phone widths before a PR.
    - Project mission records the chosen stack (Astro, Tailwind CSS, GitHub Pages via Actions),
      the custom domain `sosmy.app` with no `base` path, and one path per app instead of
      subdomains. The Astro project itself is not set up yet; that is a later branch.
    - Visitor-facing copy may be in Korean and English, kept in step in the same PR.
- **New `.gitignore`** for an Astro/Node project: `dist/`, `.astro/`, `node_modules/`, logs,
  `.env` files (except `.env.example`), `.DS_Store`, editor folders, and local AI assistant
  settings. Added now so that build output and secrets are never committed once the project is
  set up.

## Verification

- Compared each copied or adapted file with its `sos-my-english` source; every link in the new
  documents points to a file that exists in this branch.
- `grep -rn versioning docs AGENTS.md .github` finds no references outside this worklog.
- Not verified: the `npm run build` / `npm run dev` commands named in `AGENTS.md`, since the
  Astro project does not exist yet.
