import * as bootstrap from './bootstrap'
import { print } from './utils'
import { createConnection } from 'typeorm'

const databaseConnect = createConnection().then(() =>
  print.log('database connected.')
)

Promise.all([databaseConnect])
  .then(bootstrap.connected)
  .catch((error) => console.log(error))
