// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/fonts'],

  fonts: {
    families: [
      {
        name: 'DM Sans',
        global: true,
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        styles: ['normal', 'italic'],
        display: 'swap',
      },
      {
        name: 'Inter',
        global: true,
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        styles: ['normal', 'italic'],
        display: 'swap',
      },
    ],
    preload: true,
    local: true,
  },
});
