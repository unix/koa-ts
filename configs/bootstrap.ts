import { join } from 'path'
import * as dotenv from 'dotenv'


// "bootstrap" will trigger before the app lift.
export const bootstrap = async(): Promise<void> => {
  // solve ncc path link.
  const result = dotenv.config({ path: join(__dirname, '../variables.env') })
  result.error && console.log('Environment variable not loaded: not found "variables.env".')
  console.log('variables.env loaded.')
}
