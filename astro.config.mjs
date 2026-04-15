// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://marktrans.com.ua',
  output: 'static',
  adapter: vercel(),

  // i18n — Українська за замовчуванням, Російська як друга мова
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'ru'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
    fallback: {
      ru: 'uk',
    },
  },

  // Trailing slash обов'язково — розв'язує hreflang-проблему з SEO-аудиту
  trailingSlash: 'always',

  // Явний redirect / → /uk/ (замість stub-файлу)
  redirects: {
    '/': '/uk/',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: { uk: 'uk-UA', ru: 'ru-UA' },
      },
      // Google ignores priority/changefreq — we only emit lastmod.
      // Uses VERCEL_GIT_COMMIT_SHA/COMMIT_AUTHOR_DATE when available, else build time.
      serialize(item) {
        const buildTime =
          process.env.VERCEL_GIT_COMMIT_AUTHOR_DATE ||
          new Date().toISOString();
        item.lastmod = buildTime;
        item.priority = undefined;
        item.changefreq = undefined;
        return item;
      },
    }),
  ],
});