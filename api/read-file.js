const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const serverHelpers = require('../utils/server/helpers.js')
const Joi = require('@hapi/joi')

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'development') app.use(morgan('tiny'))

const joiValidationSchema = Joi.object({
  syncType: Joi.string()
    .valid('sync')
    .required(),
  fileName: Joi.string().required(),
  fileType: Joi.string().required()
})

app.get('/', async (req, res) => {
  let data

  try {
    await joiValidationSchema.validateAsync(req.query)
  } catch (error) {
    res.status(400).send({
      msg: 'Invalid data',
      invalidProperty: error.details[0].message
    })
    res.end()

    return false
  }

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
  handler: app
}
