/**
 * You can link multiple databases here.
 * Refer to: https://github.com/typeorm/typeorm/blob/master/docs/connection-options.md
 *
 *
 */
import Environment from 'configs/environments'

module.exports = {
  type: Environment.DB_TYPE,
  host: Environment.MY_HOST,
  port: Environment.MY_PORT,
  username: Environment.USERNAME,
  password: Environment.PASSWORD,
  database: Environment.DATABASE,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
