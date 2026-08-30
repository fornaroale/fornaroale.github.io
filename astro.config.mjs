import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fornaroale.gitlab.io',
  // base remains "/" so URLs stay https://fornaroale.gitlab.io/blog etc.
  // Keeping same domain as before, no link change when navigating.
  base: '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  }
});
