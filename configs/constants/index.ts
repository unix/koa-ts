import { bootstrapBefore } from '../bootstrap'
import development, { EevRecord } from './development'
import staging from './staging'
import production from './production'

const parsedEnvs = bootstrapBefore()

export type Envs = {
  DEVELOPMENT: boolean
  STAGING: boolean
  PRODUCTION: boolean
}

const getCurrentEnv = (): Envs => {
  const env = process.env?.ENV
  const up = `${env}`.toUpperCase()
  const currentEnvs: Envs = {
    DEVELOPMENT: false,
    STAGING: false,
    PRODUCTION: false,
  }
  if (up === 'PRODUCTION')
    return {
      ...currentEnvs,
      PRODUCTION: true,
    }
  if (up === 'STAGING')
    return {
      ...currentEnvs,
      STAGING: true,
    }
  return {
    ...currentEnvs,
    DEVELOPMENT: true,
  }
}

export type CurrentConstants = EevRecord

const getCurrentConstants = (envs: Envs): EevRecord => {
  let constants = development
  const source = envs.PRODUCTION ? production : envs.STAGING ? staging : development
  Object.keys(development).forEach(key => {
    const sourceValue = source[key]
    const processValue = process.env[key]
    const parsedValue = parsedEnvs[key]
    if (typeof sourceValue !== 'undefined') {
      constants[key] = sourceValue
    }
    if (typeof processValue !== 'undefined') {
      constants[key] = processValue
    }
    if (typeof parsedValue !== 'undefined') {
      constants[key] = parsedValue
    }
  })

  return constants
}

export const CURRENT_ENV = getCurrentEnv()
const CONSTANTS = getCurrentConstants(CURRENT_ENV)
export default CONSTANTS
