import { Server } from 'http'
import { print } from 'configs/utils'
import Environment from 'configs/environments'
import createServer from 'configs/application'
import * as bootstrap from 'configs/bootstrap'

module.exports = (async (): Promise<Server> => {
  try {
    const app = await createServer()
    return app.listen(Environment.port, () => {
      print.log(
        `server listening on ${Environment.port}, in ${Environment.identity} mode.`,
      )
      bootstrap.after()
    })
  } catch (e) {
    console.log(e)
  }
})()
