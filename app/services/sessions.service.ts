import { getMongoRepository, MongoRepository } from 'typeorm'
import { Service } from 'typedi'
import { Session } from 'app/entities'

@Service()
export class SessionsService {
  repository: MongoRepository<Session>

  constructor() {
    this.repository = getMongoRepository(Session)
  }

  async create(session: Session): Promise<Session> {
    return await this.repository.save(session)
  }
}
