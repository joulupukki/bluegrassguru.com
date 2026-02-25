// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bluegrassguru.com',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://www.bluegrassguru.com/privacy/' && page !== 'https://www.bluegrassguru.com/terms/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
