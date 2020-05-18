import * as entities from 'app/entities'
import * as bootstrap from './bootstrap'
import { print } from './utils'
import { createConnection, getConnectionOptions } from 'typeorm'
;(async () => {
  const connectionOptions = await getConnectionOptions()
  const connection = await createConnection({
    ...connectionOptions,
    entities: Object.keys(entities).map(name => entities[name]),
  })
  if (connection.isConnected) {
    print.log('database connected.')
  } else {
    print.danger('Database connection failed.')
  }

  bootstrap.connected()
})().catch(error => console.log(error))
