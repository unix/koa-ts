
import development from './development'
import production from './production'
import test from './test'

const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'

if (isProd && (!production.mongo.user || !production.mongo.password)) {
  console.error('mongo.production need set MONGODB_USER && MONGODB_PASS')
  process.exit(1)
}

const env = isTest ? test : (isProd ? production : development)

if (process.env.IN_DOCKER) {
  env.mongo.host = 'pro.mongo'
}


export const Environment = env
