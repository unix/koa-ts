import * as Utils from '../utils.nyc'
import { expect } from 'chai'

describe('routers: session', () => {
  
  before(async () => {
    this.server = await Utils.app()
  })
  
  it('should create a session', async() => {
    const res = await this.server.get('/api/v1/sessions.json')
    expect(res.status).equal(200)
  })
  
})
