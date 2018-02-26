import { Document, Schema, Model, model } from 'mongoose'

export interface Session extends Document {
  name: string,
}

const SessionSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
})

export const SessionModel: Model<Session> = model<Session>('Session', SessionSchema)
