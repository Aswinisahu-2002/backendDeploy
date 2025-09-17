const mongoose = require("mongoose")
const user_schema = require("../schemas/user_shemas")

const USER = mongoose.model("user",user_schema)

module.exports = USER

