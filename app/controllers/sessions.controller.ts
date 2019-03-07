import { Body, Get, JsonController, Post, QueryParam, UseInterceptor } from 'routing-controllers'
import { SessionsService } from '../services'
import { Session } from '../entities'


@JsonController()
export class SessionsController {
  
  constructor(
    // private sessionsService: SessionsService,
  ) {
  }
  
  @Get('/sessions')
  async session(@QueryParam('username') username: string): Promise<any> {
    return 'hello'
  }
  
  // If your need to use database, please set useMongoDB(in configs/customs.ts) to true.
  // @Post('/sessions')
  // async create(@Body() session: Session): Promise<any> {
  //   const created = await this.sessionsService.create(session)
  //   return { created }
  // }
}
