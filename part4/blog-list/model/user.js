const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  name: String
})

module.exports = mongoose.model('User', userSchema);