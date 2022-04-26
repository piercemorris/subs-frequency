
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    "@": "/"
  },
  // @ts-ignore
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/assets/css/default.scss";'
        }
      }
    }
  },
  css: [
    "@/assets/css/default.scss"
  ],
})
