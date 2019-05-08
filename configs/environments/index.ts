import * as bootstrap from '../bootstrap'
import development from './development'
import production from './production'
const parsedEnvs = bootstrap.before()
const isProd = process.env.NODE_ENV === 'production'
const env = isProd ? production : development


// Preference of environmental variables.
Object.keys(env.mongo).forEach(key => {
  env.mongo[key] = process.env[key] || env.mongo[key]
})

Object.keys(parsedEnvs || {}).forEach(key => {
  env[key] = parsedEnvs[key]
})

export const Environment = env
