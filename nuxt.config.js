// import colors from 'vuetify/es5/util/colors'
// import ja from 'vuetify/es5/locale/ja.js'
// const { colors } = require('vuetify/es5/util/colors.js.map')
const {ja} = require('vuetify/es5/locale/ja')

module.exports = {
  mode: 'spa',
  telemetry: false,
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUKET: process.env.FIREBASE_STORAGE_BUKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_API_ID: process.env.FIREBASE_API_ID,
  },
  server: {
    port: process.env.APP_PORT,
    host: process.env.APP_HOST,
    timing: false
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - vuetify-admin',
    title: 'vuetify-admin',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  router: {
    middleware: ['authenticated']
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    lang: {
      locales: {ja},
      current: 'ja',
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary_text: "#de0a0a",
          primary: '#e5e3ec',
          secondary: '#F3E5F5',
          accent: '#ffc107',
          error: '#f44336',
          warning: '#ffeb3b',
          info: '#03a9f4',
          success: '#4caf50'
        },
        // dark: {
        //   primary: colors.blue.darken1,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3
        // }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loadingScreen: false
  },
}
