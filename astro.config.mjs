// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served from the custom domain https://sosmy.app (see public/CNAME), so no `base` path.
export default defineConfig({
  site: 'https://sosmy.app',
  // English moved from /en/ to the root; keep the old English URLs working.
  redirects: {
    '/en': '/',
    '/en/interview': '/interview/',
    '/en/english': '/english/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
