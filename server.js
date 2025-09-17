require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDb = require("./config/db/db")
const USER = require("./models/user_models")

//Connect db
connectDb()

const app = express()

app.use(cors({origin:"*"}))

app.get("/getusers",async(req,res)=>{
    try {
        const alluser = await USER.find()
        res.status(200).json({alluser})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})


app.get("/demo",(req,res)=>{
    res.status(200).json({message:"App is running now"})
})

app.get("/test",(req,res)=>{
    res.status(200).json({message:"Test sussess"})
})

app.listen(process.env.PORT || 5050,()=>{
    console.log("SERVER IS RUNNING")
})