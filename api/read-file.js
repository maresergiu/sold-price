const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const serverHelpers = require('../utils/server/helpers.js')

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'development') app.use(morgan('tiny'))

app.get('/', (req, res) => {
  let data

  if (req.query.syncType === 'sync') {
    data = serverHelpers.readFileSync(
      `../../db/${req.query.fileName}`,
      req.query.fileType
    )
  }

  res.send(data)
  res.end()
})

module.exports = {
  path: '/api/read-file',
  handler: app,
}
