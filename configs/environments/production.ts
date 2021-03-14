import { ConnectionOptions } from 'typeorm'

export default {
  identity: 'production',

  port: 3000,

  DB_TYPE: 'mongodb' as 'mongodb',
  DB_HOST: '127.0.0.1',
  DB_PORT: 27017,
  USERNAME: 'admin',
  PASSWORD: 'admin',
  DATABASE: 'koa_ex_db',
}
