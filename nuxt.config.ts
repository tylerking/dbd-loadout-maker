
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
     ],
     script: [
       {
         children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
         })(window,document,'script','dataLayer','GTM-P9GP4PMF');`
       }
     ],
     noscript: [
       {
         children: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9GP4PMF" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
         body: true
       }
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