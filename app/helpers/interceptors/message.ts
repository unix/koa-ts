import { Action, InterceptorInterface } from 'routing-controllers'


export class MessageInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any): any {
    if (typeof content === 'object') return content
    return { message: content }
  }
}

