import 'reflect-metadata'
import * as Koa from 'koa'
import * as Customs from './customs'
import { Container } from 'typedi'
import { useMiddlewares } from './middlewares'
import { useKoaServer, useContainer } from 'routing-controllers'

if (Customs.useMongoDB) {
  require('./connection')
}

export const createServer = async(): Promise<Koa> => {
  const koa: Koa = new Koa()
  
  const app: Koa = useKoaServer<Koa>(koa, Customs.routingConfigs)
  
  useContainer(Container)
  
  return useMiddlewares(app)
}
