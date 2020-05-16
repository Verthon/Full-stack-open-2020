require('dotenv').config()

let PORT = process.env.PORT || 3000
let MONGO_URI = process.env.MONGO_DB_URI

if (process.env.NODE_ENV === 'test') {  MONGO_DB_URI = process.env.TEST_MONGO_DB_URI}

module.exports = {
  PORT,
  MONGO_URI
}