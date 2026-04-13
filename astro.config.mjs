// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://marktrans.com.ua',

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
      serialize(item) {
        const url = new URL(item.url);
        const p = url.pathname;
        if (p === '/uk/' || p === '/ru/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (/^\/(uk|ru)\/(materialy|orenda|roboty)\/$/.test(p)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (/^\/(uk|ru)\/(materialy|orenda|roboty)\/[^/]+\/$/.test(p)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (/^\/(uk|ru)\/(pro-kompaniyu|o-kompanii|dostavka-i-oplata|kontakt[iy])\/$/.test(p)) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});