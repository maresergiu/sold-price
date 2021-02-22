const serverHelpers = require('../helpers.js')

describe('serverHelpers.readFileSync', () => {
  const data = serverHelpers.readFileSync(`./mocks/mockJson.json`, 'utf8')

  it('should read a json file and return the value', () => {
    expect(typeof data).toBe('object')
  })

  it("should return a message if the file doesn't exist", () => {
    const data = serverHelpers.readFileSync(
      `./mocks/mockJson_does_not_exist.json`,
      'utf8'
    )
    expect(typeof data.message === 'string').toBe(true)
  })
})
