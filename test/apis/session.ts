import * as Utils from '../utils.nyc'
import { expect } from 'chai'

describe('routers: session', (): void => {
  
  before(async(): Promise<void> => {
    this.server = await Utils.app()
  })
  
  it('should create a session', async(): Promise<void> => {
    const res: ChaiHttp.Response = await this.server.get('/api/v1/sessions.json')
    expect(res.status).equal(200)
  })
  
})
