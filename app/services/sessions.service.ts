import { EntityManager, getMongoRepository, MongoRepository } from 'typeorm'
import { Service } from 'typedi'
import { Sessions } from '../entities'

@Service()
export class SessionsService {
  repository: MongoRepository<Sessions>
  
  constructor() {
    this.repository = getMongoRepository(Sessions)
  }
  
  async create(session: Sessions): Promise<Sessions> {
    return await this.repository.save(session)
  }
  
}
