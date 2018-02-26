export default {
  
  identity: 'production',
  
  port: 3000,
  
  mongo: {
    adapter: 'pro',
    host: '127.0.0.1',
    port: 27017,
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASS,
    database: process.env.MONGODB_DATABASE,
  },
  
}
