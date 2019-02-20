import { Body, Get, JsonController, Post, QueryParam, UseInterceptor } from 'routing-controllers'
import { SessionsService } from '../services'
import { Interceptors } from '../helpers'
import { Session } from '../entities'


@JsonController()
export class SessionsController {
  
  constructor(
    private sessionsService: SessionsService,
  ) {
  }
  
  @Get('/sessions')
  @UseInterceptor(Interceptors.MessageInterceptor)
  async session(@QueryParam('username') username: string): Promise<any> {
    return 'hello'
  }
  
  @Post('/sessions')
  async create(@Body() session: Session): Promise<any> {
    const created = await this.sessionsService.create(session)
    return { message: 'ok', created }
  }
}
