import { createServer } from './config/application'
import { Environment } from './config/environments/index'
import { Server } from 'http'

module.exports = (async() => {
  try {
    const app = await createServer()
    const server: Server = app.listen(Environment.port, () => {
      console.log(`Server listening on ${Environment.port}, in ${Environment.identity} mode.`)
    })
    return server
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
})()
