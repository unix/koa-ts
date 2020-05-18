import 'reflect-metadata'
import Koa from 'koa'
import { Container } from 'typedi'
import { useDatabase } from './customs'
import { routingConfigs } from './routing.options'
import { useMiddlewares } from './koa.middlewares'
import { useKoaServer, useContainer } from 'routing-controllers'
if (useDatabase) {
  require('./connection')
}

const createServer = async (): Promise<Koa> => {
  const koa: Koa = new Koa()

  useMiddlewares(koa)

  const app: Koa = useKoaServer<Koa>(koa, routingConfigs)

  useContainer(Container)

  return app
}

export default createServer
