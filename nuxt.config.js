module.exports = {
  mode: 'universal',
  /* headers of the page */
  head: {},
  /* customize the progress-bar color */
  loading: { color: '#000000' },
  css: ['@assets/scss/style.scss'],
  /* plugins to load before mounting the App */
  plugins: [],
  /* nuxt.js dev-modules */
  buildModules: [],
  serverMiddleware: [
    // will register file from project api directory to handle /api/* requires
    { path: '/api/read-file', handler: '~/api/read-file' }
  ],
  env: {},
  /* nuxt.js modules */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
  ],
  axios: {},
  /* build configuration */
  build: {
    /* you can extend webpack config here */
  }
}
