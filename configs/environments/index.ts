import development from './development'
import production from './production'
const envFile = require('node-env-file')
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'


// use variables.env file first.
const env = isProd ? production : development
const secrets = envFile(path.join(__dirname, '../../variables.env'))
Object.keys(secrets).forEach(name => {
  if (!secrets[name]) return
  if (name.startsWith('MONGODB')) env.mongo[name] = secrets[name]
  env[name] = secrets[name]
})


// must be included mongodb configs in prod mode
if (isProd && (!env.mongo.MONGODB_USER || !env.mongo.MONGODB_PASS)) {
  console.error('mongo.production need set MONGODB_USER && MONGODB_PASS')
  process.exit(1)
}

export const Environment = env
