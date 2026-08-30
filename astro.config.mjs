import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fornaroale.github.io',
  // base remains "/" so URLs stay https://fornaroale.github.io/blog etc.
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
