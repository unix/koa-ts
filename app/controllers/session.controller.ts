import { Context } from 'koa'
import { SessionService } from '../services'
import { Session } from '../models'

export const SessionController = {

  async session(ctx: Context): Promise<void> {
    ctx.ok({ token: 'abc' })
  },
  
  async auth(ctx: Context): Promise<void> {
    ctx.badRequest('you have no access to the authority.')
  },
  
  async validate(ctx: Context): Promise<void> {
    const { name } = ctx.params
    try {
      const session: Session = await SessionService.create({ name })
      ctx.created(session)
    } catch (e) {
      ctx.catch(e)
    }
  },
  
}
