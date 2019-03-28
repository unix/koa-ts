export default {
  identity: 'development',
  
  port: 3000,
  
  // Will be overwritten by the Env configuration of file "variables.env"
  mongo: {
    MONGODB_HOST: '127.0.0.1',
    MONGODB_PORT: 27017,
    MONGODB_USER: '',
    MONGODB_PASS: '',
    MONGODB_DATABASE: '',
  },
  
}
