import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://smarthealthclinic.com.np',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
