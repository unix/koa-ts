import * as entities from '../app/entities'
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
.then(() => console.log('mongodb connect success'))
.catch(error => console.log(error))
