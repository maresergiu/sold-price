var fs = require('fs')
const path = require('path')

const readFileSync = (fileName, extension) => {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, fileName), extension)
    const jsonData = JSON.parse(data)
    return jsonData
  } catch (error) {
    return error
  }
}

module.exports = {
  readFileSync
}
