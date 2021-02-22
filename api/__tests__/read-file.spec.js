import { Nuxt, Builder } from 'nuxt'
import request from 'supertest'
import nuxtConfig from '../../nuxt.config.js'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
beforeAll(async () => {
  nuxt = new Nuxt(nuxtConfig)
  await new Builder(nuxt).build()
  await nuxt.server.listen(4000, 'localhost')
}, 30000)

// Example of testing only generated html
describe('GET /', () => {
  it('returns status code 400 if no query have been pass', async () => {
    const response = await request(nuxt.server.app).get('/api/read-file')
    expect(response.statusCode).toBe(400)
  })

  it('returns status code 400 if no query is not valid', async () => {
    const response = await request(nuxt.server.app).get(
      '/api/read-file?syncType=test&fileName=sold-price&fileType=utf8'
    )
    expect(response.statusCode).toBe(400)
  })

  it('returns status code 400 if file does not exist', async () => {
    const response = await request(nuxt.server.app).get(
      '/api/read-file?syncType=test&fileName=sold&fileType=utf8'
    )
    expect(response.statusCode).toBe(400)
  })

  it('returns status code 200', async () => {
    const response = await request(nuxt.server.app).get(
      '/api/read-file?syncType=sync&fileName=sold-price.json&fileType=utf8'
    )
    expect(response.statusCode).toBe(200)
  })

  it('returns the value of the file if it is found', async () => {
    const { body } = await request(nuxt.server.app).get(
      '/api/read-file?syncType=sync&fileName=sold-price.json&fileType=utf8'
    )
    expect(Array.isArray(body)).toBe(true)
  })
})

// Close server and ask nuxt to stop listening to file changes
afterAll(() => {
  nuxt.close()
})
