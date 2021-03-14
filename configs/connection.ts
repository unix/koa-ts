import * as entities from 'app/entities'
import * as bootstrap from './bootstrap'
import Environment from './environments'
import { print } from './utils'
import { ConnectionManager } from 'typeorm'
;(async () => {
  const connectionManager = new ConnectionManager()
  const connection = connectionManager.create({
    type: Environment.DB_TYPE,
    host: Environment.DB_HOST,
    port: Environment.DB_PORT,
    username: Environment.USERNAME,
    password: Environment.PASSWORD,
    database: Environment.DATABASE,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: Object.keys(entities).map(name => entities[name]),
  })

  await connection.connect()
  if (connection.isConnected) {
    print.log('database connected.')
  } else {
    print.danger('Database connection failed.')
  }

  bootstrap.connected()
})().catch(error => console.log(error))
