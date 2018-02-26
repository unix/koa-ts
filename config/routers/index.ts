import base from './base'
const router = require('koa-router')()

router.use('/api/v1', base.routes(), base.allowedMethods())

export {
  router,
}
