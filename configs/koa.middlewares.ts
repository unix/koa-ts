import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as bodyParser from 'koa-bodyparser'
import { Environment } from './environments'


export const useMiddlewares = <T extends Koa>(app: T): T => {
  Environment.identity !== 'test' && app.use(logger())
  
  app.use(bodyParser())
  
  return app
}
