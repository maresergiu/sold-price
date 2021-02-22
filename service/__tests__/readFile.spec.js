import { readFile } from '../readFile.js'
import axios from 'axios'

jest.mock('axios')

describe('helper client function readFile', () => {
  it('should return successfully results from /api/read-file', async () => {
    const response = {
      data: [[1, 1, 1000000]]
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(response))

    const httpResponse = await readFile('sold-price.json', 'utf8', 'sync')
    expect(httpResponse).toEqual(response.data)
  })

  it('should return a string if call fails /api/read-file', async () => {
    const response = {
      data: 'no such file'
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(response))

    const httpResponse = await readFile('sold-price.json', 'utf8', 'sync')
    expect(httpResponse).toEqual(response.data)
  })
})
