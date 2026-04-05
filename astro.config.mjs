import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://florhesiendo.com',
  integrations: [tailwind()],
  adapter: netlify(),
  devToolbar: {
    enabled: false,
  },
});