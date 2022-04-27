
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    "@": "/"
  },
  css: ["@/assets/css/default.scss"],
  // @ts-ignore
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/assets/css/_colors.scss";'
        }
      }
    }
  },
})
