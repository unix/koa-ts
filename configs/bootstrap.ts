import { join } from 'path'
import { print } from './utils'
import dotenv from 'dotenv'

// "before" will trigger before the app lift.
export const before = (): object => {
  // solve ncc path link.
  const result = dotenv.config({ path: join(__dirname, '../.env') })
  if (result.error) {
    print.danger('Environment variable not loaded: not found ".env".')
    return {}
  }
  print.log('.env loaded.')
  return result.parsed
}

// "after" will trigger after the "container" lift.
export const after = (): any => {}
