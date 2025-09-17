const mongoose = require("mongoose")

const user_schema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

module.exports = user_schema