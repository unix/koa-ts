import { SessionModel, Session } from '../models'

export const SessionService = {
  
  async create(session: any): Promise<Session> {
    return SessionModel.create(session)
  },
  
}
