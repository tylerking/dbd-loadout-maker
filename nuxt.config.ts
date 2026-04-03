import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  typescript: {
    strict: true
  },
  vite: {
    plugins: [
      vanillaExtractPlugin()
    ]
  },
  app: {
    head: {
      title: 'DBD Loadout Maker',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
