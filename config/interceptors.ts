import { InterceptorInterface, Action, Interceptor } from 'routing-controllers'

@Interceptor()
export class AutoAssignJSONInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any): any {
    if (typeof content === 'object') return JSON.stringify(content)
    return JSON.stringify({ message: content })
  }
}
