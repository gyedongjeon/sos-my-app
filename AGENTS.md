# Agent Instructions

This file provides specific context and operational rules for AI assistants working within the `sos-my-app` project.

## Core Directives
- **Source of Truth**: Always refer to the following documents for project rules and conventions:
    - [docs/git-workflow/commit-convention.md](docs/git-workflow/commit-convention.md) - Rules for commit messages.
    - [docs/git-workflow/branching-strategy.md](docs/git-workflow/branching-strategy.md) - Branch naming, GitHub Flow / merge strategy, and deployment.
    - [docs/git-workflow/pr-convention.md](docs/git-workflow/pr-convention.md) - PR title, description, and process conventions.
    - [README.md](README.md) - Project overview and structure.
- **Commits**: Use Conventional Commits as defined in [docs/git-workflow/commit-convention.md](docs/git-workflow/commit-convention.md).
- **Language**: Documentation and code comments should be in **English**. User interaction can be in Korean or English as per user preference.
    - Exception: the site's visitor-facing copy is in every language in `src/i18n.ts` (the feedback languages of the SOS apps), one file per language in `src/locales/`. Keep them in step: when the copy changes in one language, update every language in the same PR. `astro check` fails if a language is missing a key.
- **Security & Data Protection**: Never add secrets, API keys, credentials, or personal data to the repository. Worklog/PR text also follows the anonymization rules in **Worklog**.

## Development Method
Follow Kent Beck's Tidy First, and test-first where there is logic to test.

- **Tidy First (separate structural from behavioral changes)**:
    - A **structural** change rearranges code without changing what it does (rename, extract a component, move, reorder). A **behavioral** change adds or alters what the site shows or does.
    - Never mix the two in one commit. When both are needed, tidy first: make the structural change, confirm the site still builds and looks the same, commit it, then make the behavioral change.
    - Commit structural changes as `refactor:` and behavioral ones as `feat:` or `fix:`, per the commit convention.
    - Tidy only what makes the next change easier; keep each tidying small.
- **Tests**:
    - The site is mostly static content, so a test is not required for markup or copy changes.
    - When a change adds logic (for example a script, a data transform, or a build helper), follow TDD: write one small failing test first, make it pass with the least code, then refactor. For a bug in such logic, first write a test that reproduces it.
- **Checking a change**:
    - Use the Node.js version in `.nvmrc` (`fnm use`); Astro refuses to run on older versions.
    - Run `npm test` (Node's test runner over `tests/*.test.ts`) when a change touches logic in `src/lib/`.
    - Run `npm run build` (type check and build) before every commit; never commit a change that does not build.
    - Look at every changed page in the browser (`npm run dev` or `npm run preview`), at desktop and phone widths, before opening a PR.
    - Check that links to the apps (GitHub repositories, downloads) still resolve.

## Worklog (MANDATORY for every PR)
- Every PR must include exactly one branch-specific worklog file named `docs/worklog/YYYY-MM-DD-<branch-slug>.md`. This count excludes [docs/worklog/_template.md](docs/worklog/_template.md).
- Create the worklog file on the same branch as the change and commit it **before opening the PR**.
- **The worklog file is the source of truth for the PR**: PR title = the worklog `title` field; PR description = the worklog body (from `## Request` down). Generate the PR from the file, never the other way around.
- If the scope changes during review, update the worklog file first, then sync the PR description to match.
- The Security & Data Protection rules apply to worklog files too. Never name individuals — including requesters or reviewers — in a worklog. Refer to request sources by channel/system and date, not by name.
- Never modify another branch's worklog file.

## Project Mission
- **Project**: `sos-my-app` — the website for the SOS app series, served at `https://sosmy.app`. It introduces the series' apps and links to them:
    - [`sos-my-interview`](https://github.com/gyedongjeon/sos-my-interview) — interview practice.
    - [`sos-my-language`](https://github.com/gyedongjeon/sos-my-language) — speaking-first practice for English and German (it replaced `sos-my-english` and `sos-my-german`).
    - [`sos-my-feed`](https://github.com/gyedongjeon/sos-my-feed) — a reader for RSS and Atom feeds.
- **Architecture**: A static site.
    - **Framework**: Astro, producing plain HTML/CSS with no client-side JavaScript unless a feature needs it.
    - **Styling**: Tailwind CSS with daisyUI, sharing the SOS apps' design system. `src/styles/global.css` starts with a verbatim copy of the apps' `frontend/src/style.css` (`sos` and `sos-night` themes); keep it in step with the apps, and add site-only rules after it. Prefer daisyUI component classes and theme colors over custom CSS, as the apps do.
    - **Hosting**: GitHub Pages, deployed by GitHub Actions on every push to `main`, with the custom domain `sosmy.app` (`site: 'https://sosmy.app'`, no `base` path). `.app` domains are HTTPS-only.
    - **Structure**: One site with a page per app under a path (`/interview`, `/language`, `/feed`), not a subdomain per app. English is served at `/`, every other language under `/<locale>/` (e.g. `/ko/`, `/zh-hans/`).
    - **Content**: App data (name, repository, icon, screenshots) lives in `src/data/apps.ts`; all text lives in `src/locales/<locale>.ts`. App copy follows each app's README (`README.ko.md` for Korean). When an app's features or supported platforms change, update every locale.
- **For language models**: `/llms.txt` (`src/pages/llms.txt.ts`, built by `src/lib/llms.ts`) gives the site's English copy as Markdown, and each page carries schema.org JSON-LD (`src/lib/jsonld.ts`): `WebSite` on the home page, `SoftwareApplication` on an app page. Both are built from `src/data/apps.ts` and the locales, so they follow copy changes on their own; a new app needs only its `category` in `apps.ts`.
- **Search engines**: `sitemap-index.xml` (listed in `public/robots.txt`) and IndexNow. After each deploy, the `indexnow` job in `.github/workflows/deploy.yml` runs `scripts/indexnow.ts`, which sends every URL in the live sitemap to IndexNow (Bing, Yandex, and others; Google does not use it). The key in `src/data/indexnow.ts` is public by design, since `src/pages/[key].txt.ts` serves it at `/<key>.txt` for verification, so it is not a secret. Changing it only means search engines verify the new key file.
- **Scope**: An informational site. Do not add a backend, authentication, cookies, or third-party trackers unless explicitly requested.
    - **Analytics**: Cloudflare Web Analytics only (token in `src/data/analytics.ts`, beacon in `src/layouts/Base.astro`). It sets no cookies and does not track visitors across sites, so it needs no consent banner. The DNS records stay DNS-only (not proxied) so GitHub Pages keeps issuing its HTTPS certificate, which is why the beacon is installed as a snippet.
    - Do not add Google Analytics or other cookie-based or cross-site tracking: under the GDPR and the German TTDSG it would need a consent banner, a privacy policy, and an imprint with a postal address.

## Operational Preferences
- **Conciseness**: Be concise and technical in your responses.
