// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

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
});
