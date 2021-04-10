import { PrismaClient } from '@prisma/client'
import { Service } from 'typedi'

@Service()
export class PrismaService {
  constructor() {
    const prisma: string = new PrismaClient()
  }
}
