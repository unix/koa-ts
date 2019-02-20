import 'reflect-metadata'
import * as Koa from 'koa'
import * as controllers from '../app/controllers'
import * as interceptors from './interceptors'
import { Container } from 'typedi'
import { useMiddlewares } from './middlewares'
import { useKoaServer, useContainer } from 'routing-controllers'

// import './connection'

const objectToArray = (dict: object): Array<any> =>
  Object.keys(dict).map(name => dict[name])

export const createServer = async(): Promise<Koa> => {
  const koa: Koa = new Koa()
  
  const app: Koa = useKoaServer<Koa>(koa, {
    routePrefix: '/apis',
    validation: true,
    interceptors: objectToArray(interceptors),
    controllers: objectToArray(controllers),
  })
  
  useContainer(Container)
  
  return useMiddlewares(app)
}
