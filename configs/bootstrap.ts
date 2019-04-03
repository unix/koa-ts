import { join } from 'path'
import * as dotenv from 'dotenv'


// "bootstrap" will trigger before the app lift.
export const bootstrap = (): object => {
  // solve ncc path link.
  const result = dotenv.config({ path: join(__dirname, '../variables.env') })
  if (result.error) {
    console.log('Environment variable not loaded: not found "variables.env".')
    return {}
  }
  console.log('variables.env loaded.')
  return result.parsed
}
