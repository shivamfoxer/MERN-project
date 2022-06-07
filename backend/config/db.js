import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            
        })
        console.log(`monodb connected:${conn.connection.host}`)
    }catch(error){
        console.error(`error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB