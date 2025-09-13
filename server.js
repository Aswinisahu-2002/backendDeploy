require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors({origin:"*"}))


app.get("/demo",(req,res)=>{
    res.status(200).json({message:"App is running now"})
})

app.get("test",(req,res)=>{
    res.status(200).json({message:"Test sussess"})
})

app.listen(process.env.PORT || 5050,()=>{
    console.log("SERVER IS RUNNING")
})