const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'universal',
  ...(!isDev && {
    modern: 'client'
  }),
  head: {
    title: 'yapomoga',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
    ],
  },
  rootDir: __dirname,
  serverMiddleware: [
  ],
  router: {
    prefetchLinks: false
  },
  loading: { color: '#ddd' },

  css: [
    '~/assets/css/main.scss',
    '~/assets/css/media.scss',
  ],
  plugins: [
    {src: '~/plugins/directives.client.js'},
    {src: '~~/plugins/vue-lazy-load.js'},
    {src: '~/plugins/filters.js'},
  ],
  axios: {
    baseUrl: 'http://localhost:3000/api'
  },
  components: true,

  buildModules: [
  ],

  modules: [
    ['nuxt-i18n', {
      detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: false,
          fallbackLocale: 'ru'
        },
      locales: [
        {
          name: 'UA',
          code: 'ua',
          iso: 'ua-UA',
          file: 'ua-UA.js'
        },
        {
          name: 'RU',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru-RU.js'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'ua',
    }],
      '@nuxtjs/axios',
      'nuxt-trailingslash-module',
      'cookie-universal-nuxt',
      '@nuxtjs/auth-next'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  render: {
    render: {
      // http2: {
      //     push: true,
      //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
      //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
      //   },
      // compressor: false,
      resourceHints: false,
      etag: false,
      static: {
        etag: false
      }
    },
  },
  server: {
    port: 8000,
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/sessions', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/sessions/user', method: 'get', propertyName: 'data.attributes' }
        },
        tokenType: '',
      },
    },
  }
}
