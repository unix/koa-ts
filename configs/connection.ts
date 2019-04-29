import * as entities from 'entities'
import { Environment } from './environments'
import { createConnection } from 'typeorm'
const mongo = Environment.mongo


createConnection({
  type: 'mongodb',
  host: mongo.MONGODB_HOST,
  port: mongo.MONGODB_PORT,
  username: mongo.MONGODB_USER,
  database: mongo.MONGODB_DATABASE,
  password: mongo.MONGODB_PASS,
  useNewUrlParser: true,
  entities: Object.keys(entities).map(name => entities[name]),
})
.then(() => {
  console.log('\x1b[37m\%s \x1b[2m%s\x1b[0m', '>', 'connected mongodb.')
})
.catch(error => console.log(error))
