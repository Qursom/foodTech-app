// import { connect,ConnectOptions } from "mongoose";

// export const  dbConnect=()=>{
  
//     connect(process.env.MONGO_URI!,{
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true
//     } as ConnectOptions).then(
//         ()=>console.log("DB connection successful"),
//         (error) => console.log("Db connection failed",error)
//     )
// }


import mongoose from "mongoose";


const dbConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.Mongo_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default dbConnect
