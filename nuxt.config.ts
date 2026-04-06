
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
     htmlAttrs: { lang: 'en' },
     link: [
       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
     ]
   }
 },

 compatibilityDate: '2024-04-03',
 modules: ['@nuxtjs/google-fonts'],
 googleFonts: {
   families: {
     'Roboto Condensed': [400, 700],
     Roboto: [400, 500, 700]
   }
 }
 })