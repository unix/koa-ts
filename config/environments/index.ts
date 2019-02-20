import development from './development'
import production from './production'
import test from './test'
const envFile = require('node-env-file')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'


// use variables.env file first.
const env = isTest ? test : (isProd ? production : development)
const secrets = envFile(path.join(__dirname, '../../variables.env'))
Object.keys(secrets).forEach(name => {
  if (!secrets[name]) return
  env.mongo[name] = secrets[name]
})


// must be included mongodb configs in prod mode
if (isProd && (!env.mongo.MONGODB_USER || !env.mongo.MONGODB_PASS)) {
  console.error('mongo.production need set MONGODB_USER && MONGODB_PASS')
  process.exit(1)
}

export const Environment = env
