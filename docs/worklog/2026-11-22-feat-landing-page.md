---
title: "feat: add the SOS series landing page"
date: 2026-11-22
branch: feat/landing-page
request-source: chat session, 2026-11-22
---

## Request

Build the website that introduces the SOS apps (`sos-my-interview`, `sos-my-english`) with the
stack agreed earlier: Astro and Tailwind CSS, deployed to GitHub Pages at the custom domain
`sosmy.app`.

## Changes

- **Project setup**: Astro 7 with Tailwind CSS 4 (through `@tailwindcss/vite`), `site:
  'https://sosmy.app'` and no `base` path, `public/CNAME`, and `.nvmrc` pinning Node.js 24
  (Astro 7.4 needs at least 22.23.4). `npm run build` runs `astro check` before building, so a
  type error fails the build.
- **Deployment**: `.github/workflows/deploy.yml` builds on pull requests into `main` and builds
  and deploys on pushes to `main`, with the official Pages actions. The plain actions were
  chosen over `withastro/action` so that the build steps are the same `npm ci` / `npm run build`
  used locally.
- **Pages**: Korean at `/`, English at `/en/`.
    - Home: the series hero, a card per app (icon, summary, screenshot), and what the apps share.
    - `/interview/` and `/english/`: hook, summary, a download button to the latest GitHub
      release, supported platforms, screenshots, main features, what is needed before starting
      (an API key), privacy, and a link to the README.
    - `404`: in both languages, since GitHub Pages serves one file for every missing URL.
    - Each page has canonical and `hreflang` links to its other language.
- **Content**: `src/i18n.ts` holds the shared text and `src/data/apps.ts` each app's copy, both
  in Korean and English side by side, so a change in one language sits next to the other. App
  copy follows each app's README and `README.ko.md`; feature lists were shortened to the main
  items, with the README linked for the rest.
- **Look**: the apps' own colors (warm paper, navy frame, signal orange, from their `sos` and
  `sos-night` themes), the Bricolage Grotesque display font, the life-ring logo, and the Morse
  "SOS" motif. Dark mode follows the system. daisyUI was left out: the site needs a handful of
  colors, not components. No client-side JavaScript is shipped.
- **Assets**: app icons (`desktop/assets/icon.svg`) and screenshots (`docs/images/`) copied from
  each app's repository; Astro converts the screenshots to responsive WebP.
- **Docs**: `README.md` describes running, structure, and the one-time Pages setup; `AGENTS.md`
  names `.nvmrc`, the language paths, and where app copy lives.

## Verification

- `npm run build` under Node.js 24.22.3: `astro check` 0 errors, 0 warnings; 7 pages built.
- Every `href` in the built pages checked: internal paths exist in `dist/`; GitHub links
  (repositories, READMEs, latest releases) answer 200. The `https://sosmy.app/...` canonical
  links do not resolve yet, since the domain is not connected.
- Looked at screenshots from headless Chrome of the Korean home and interview page at 1280px,
  the English home in dark mode, and the Korean home and English `english` page at 390px (in
  iframes, since headless Chrome does not narrow its window that far): no horizontal scrolling,
  and the header wraps on phones.
- Not verified: the deploy workflow itself (it runs once this is merged), the Pages settings and
  DNS for `sosmy.app`, and the site in Safari or on a real phone.
