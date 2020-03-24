import * as bootstrap from './bootstrap'
import { print } from './utils'
import { createConnection } from 'typeorm'

const mongoConnect = createConnection().then(() =>
  print.log('database connected.')
)

Promise.all([mongoConnect])
  .then(bootstrap.connected)
  .catch((error) => console.log(error))
