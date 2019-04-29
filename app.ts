import { Environment } from './configs/environments'
import { createServer } from './configs/application'
import { Server } from 'http'

module.exports = (async(): Promise<Server> => {
  try {
    const app = await createServer()
    return app.listen(Environment.port, () => {
      console.log(
        '\x1b[37m\%s \x1b[2m%s\x1b[0m', '>',
        `server listening on ${Environment.port}, in ${Environment.identity} mode.`,
      )
    })
  } catch (e) {
    console.log(e)
  }
})()
