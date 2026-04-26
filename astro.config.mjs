import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://florenciavilleneuve.com',
  integrations: [tailwind(), sitemap()],
  adapter: netlify(),
  devToolbar: {
    enabled: false,
  },
  favicon: '/favicon.svg',
});