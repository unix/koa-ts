import 'reflect-metadata'
import './connection'
import * as Koa from 'koa'
import { Container } from 'typedi'
import { routingConfigs } from './routing.options'
import { useMiddlewares } from './koa.middlewares'
import { useKoaServer, useContainer } from 'routing-controllers'

export const createServer = async (): Promise<Koa> => {
  const koa: Koa = new Koa()

  useMiddlewares(koa)

  const app: Koa = useKoaServer<Koa>(koa, routingConfigs)

  useContainer(Container)

  return app
}
