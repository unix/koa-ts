import { Get, JsonController } from 'routing-controllers'
import { Environment } from 'configs/environments'

@JsonController()
export class SessionsController {
  @Get('/sessions')
  async session(): Promise<any> {
    return `hello on ${Environment.identity}.`
  }
}
