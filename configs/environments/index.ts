import { bootstrap } from '../bootstrap'
import development from './development'
import production from './production'
const parsedEnvs = bootstrap()
const isProd = process.env.NODE_ENV === 'production'
const env = isProd ? production : development


// Preference of environmental variables.
Object.keys(env.mongo).forEach(key => {
  env.mongo[key] = process.env[key] || env.mongo[key]
})

Object.keys(parsedEnvs || {}).forEach(key => {
  env[key] = parsedEnvs[key]
})


// must be included mongodb configs in prod mode
if (isProd && (!env.mongo.MONGODB_USER || !env.mongo.MONGODB_PASS)) {
  console.error('mongo.production need set MONGODB_USER && MONGODB_PASS')
  process.exit(1)
}

export const Environment = env
