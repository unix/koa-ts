import { RoutingControllersOptions } from 'routing-controllers'
import * as path from 'path'
import * as interceptors from './interceptors'
const objectToArray = (dict: object): Array<any> =>
  Object.keys(dict).map(name => dict[name])


export const routingConfigs: RoutingControllersOptions = {
  controllers: [path.join(__dirname, '../app/controllers/**/*.ts')],
  
  // global interceptors
  interceptors: objectToArray(interceptors),
  
  // router prefix
  // e.g. api => http://hostname:port/{routePrefix}/{controller.method}
  routePrefix: '/apis',
  
  // auto validate entity item
  // learn more: https://github.com/typestack/class-validator
  validation: true,
}

export const useMongoDB = false
