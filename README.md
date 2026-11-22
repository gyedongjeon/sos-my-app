# sos-my-app

The website of the SOS app series, served at **https://sosmy.app**. It introduces the apps and links to their downloads:

- [SOS My Interview](https://github.com/gyedongjeon/sos-my-interview): English interview practice.
- [SOS My English](https://github.com/gyedongjeon/sos-my-english): English speaking practice.

Korean is served at `/`, English at `/en/`.

## Run locally

Requires the Node.js version in [`.nvmrc`](.nvmrc) (with [fnm](https://github.com/Schniz/fnm) or nvm: `fnm use`).

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # type check (astro check) and build into dist/
npm run preview  # serve dist/
```

## Structure

| Path | What it holds |
| :--- | :--- |
| `src/i18n.ts` | Languages, URL helper, and the text shared by every page (Korean and English) |
| `src/data/apps.ts` | Each app's copy, features, platforms, icon, and screenshots |
| `src/components/HomePage.astro`, `AppPage.astro` | The page bodies, rendered once per language |
| `src/pages/` | Routes: `index`, `interview`, `english`, and the same under `en/`; `404` |
| `src/layouts/Base.astro` | `<head>`, header, and footer |
| `src/styles/global.css` | Tailwind CSS and daisyUI with the SOS themes, copied from the apps' `frontend/src/style.css` |
| `src/assets/` | App icons and screenshots, copied from each app's repository |
| `public/CNAME` | The custom domain |

To add an app: add its entry to `src/data/apps.ts`, its icon and screenshots to `src/assets/`, and a page in `src/pages/` and `src/pages/en/`.

## Deployment

`.github/workflows/deploy.yml` builds the site on every pull request into `main` and deploys it to GitHub Pages on every push to `main`. See [docs/git-workflow/branching-strategy.md](docs/git-workflow/branching-strategy.md).

One-time setup in the repository's **Settings → Pages**: Source **GitHub Actions**, custom domain `sosmy.app`, then **Enforce HTTPS** once the certificate is issued.

## Contributing

See [AGENTS.md](AGENTS.md) and [docs/git-workflow/](docs/git-workflow/).
