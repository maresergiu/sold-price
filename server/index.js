const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const dotenv = require('dotenv')
const nuxtConfig = require('../nuxt.config.js')

dotenv.config()

nuxtConfig.dev = process.env.NODE_ENV !== 'production'

const server = {
  methods: {
    startApp: async () => {
      // Init Nuxt.js
      const nuxt = new Nuxt(nuxtConfig)

      await nuxt.ready()

      // build only in dev mode
      if (nuxtConfig.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
      }

      // give nuxt middleware to express
      app.use(nuxt.render)

      // listen the server
      const port = process.env.PORT || 80
      app.listen(port, process.env.HOST)

      nuxtConfig.dev &&
        consola.ready({
          message: `Server listening on http://${process.env.HOST}:${port}`,
          badge: true
        })
    }
  },
  init: () => {
    server.methods.startApp()
  }
}

server.init()
