// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { prefixedLocales } from './src/i18n.ts';

// Served from the custom domain https://sosmy.app (see public/CNAME), so no `base` path.
export default defineConfig({
  site: 'https://sosmy.app',
  // English moved from /en/ to the root; keep the old English URLs working.
  redirects: {
    '/en': '/',
    '/en/interview': '/interview/',
    '/en/english': '/language/',
    // SOS My English and SOS My German were merged into SOS My Language; keep their pages' URLs working.
    '/english': '/language/',
    '/german': '/language/',
    ...Object.fromEntries(
      prefixedLocales.flatMap((locale) => [
        [`/${locale}/english`, `/${locale}/language/`],
        [`/${locale}/german`, `/${locale}/language/`],
      ]),
    ),
  },
  // Writes sitemap-index.xml (listed in public/robots.txt). Pages already carry their hreflang alternates.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
