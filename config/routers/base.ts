import { SessionController } from '../../app/controllers'
const router = require('koa-router')()

export default router
  .post('/sessions.json', SessionController.session)
