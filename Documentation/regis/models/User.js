const mongoose = require('mongoose')
//(1) mongoose

const UserSchema = new mongoose.Schema({
    //(2)Schema//
    firstName:String,
    lastName: String,
    password: String,
    email: String,
})

module.exports = mongoose.model('User',UserSchema)
//(3)exports
