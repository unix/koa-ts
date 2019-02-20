import * as Koa from 'koa'
import * as kcors from 'kcors'
import * as logger from 'koa-logger'
import * as bodyParser from 'koa-bodyparser'
import { KoaCustomResponse } from 'koa-custom-response'
import { Environment } from './environments'


export const useMiddlewares = <T extends Koa>(app: T): T => {
  app.use(kcors())
  
  Environment.identity !== 'test' && app.use(logger())
  
  app.use(bodyParser())
  
  app.use(KoaCustomResponse())
  
  return app
}
