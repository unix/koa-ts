import { join } from 'path'
import * as dotenv from 'dotenv'


// "bootstrap" will trigger before the app lift.
export const bootstrap = (): object => {
  // solve ncc path link.
  const result = dotenv.config({ path: join(__dirname, '../variables.env') })
  if (result.error) {
    console.log('\x1b[31m\%s \x1b[31m%s\x1b[0m', '>', 'Environment variable not loaded: not found "variables.env".')
    return {}
  }
  console.log('\x1b[37m\%s \x1b[2m%s\x1b[0m', '>', 'variables.env loaded.')
  return result.parsed
}
