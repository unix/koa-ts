import { BadRequestError, Post, JsonController, BodyParam } from 'routing-controllers'
import { SessionsService } from '../services'
import { Prisma } from '@prisma/client'

@JsonController()
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Post('/sessions')
  async create(
    @BodyParam('username') name: string,
  ): Promise<Prisma.SessionGetPayload<any>> {
    if (!name) {
      throw new BadRequestError('username is required')
    }
    return await this.sessionsService.create({ name })
  }
}
