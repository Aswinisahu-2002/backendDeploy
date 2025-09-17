const mongoose = require("mongoose")

const connectDb = async (params) => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected")
    } catch (error) {
        console.log("Database Connection faild")
    }
}

module.exports = connectDb