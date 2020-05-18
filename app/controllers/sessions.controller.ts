import { Get, JsonController, QueryParam } from 'routing-controllers'
import Environment from 'configs/environments'

@JsonController()
export class SessionsController {
  constructor() {}

  @Get('/sessions')
  async session(@QueryParam('username') username: string): Promise<any> {
    return `hello on ${Environment.identity}.`
  }
}
