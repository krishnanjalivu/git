import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import connectDb from './config/dbConfig'
dotenv.config()
connectDb()
const port=process.env.PORT || 5001 
const app=express();
app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"https://localhost:3000",
    credentials:true
}))
// app.use("/api/",shortUr)
app.get("/",(req,res)=>{
    res.send('Hello World');
})
app.listen(port,()=>{
    console.log(`server is running on port :${port}`)
})

