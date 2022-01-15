import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import Environment from './constants'

export const useMiddlewares = <T extends Koa>(app: T): T => {
  Environment.ENV_LABEL === 'PRODUCTION' && app.use(logger())

  app.use(bodyParser())

  return app
}
