import { createServer } from './configs/application'
import { Environment } from './configs/environments'
import { Server } from 'http'

module.exports = (async(): Promise<Server> => {
  try {
    const app = await createServer()
    return app.listen(Environment.port, () => {
      console.log(`server listening on ${Environment.port}, in ${Environment.identity} mode.`)
    })
  } catch (e) {
    console.log(e)
  }
})()
