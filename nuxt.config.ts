const { APP_URL, API_URL, API_KEY } = process.env

// v0.3.0
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    baseURL: APP_URL,
    apiURL: API_URL,
    apiKey: API_KEY,
  },
  css: [
    'vuetify/lib/styles/main.sass', 
    'mdi/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
