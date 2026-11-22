// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served from the custom domain https://sosmy.app (see public/CNAME), so no `base` path.
export default defineConfig({
  site: 'https://sosmy.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
