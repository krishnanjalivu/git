import mongoose from "mongoose"
const connectDb=async()=>{
try{
const connect= await mongoose.connect(`${process.env.MONGODB_URL_CONNECTION}`)
console.log("Database connected")
}
catch(error){
console.log(error)
process.exit(1)
}
}
export default connectDb