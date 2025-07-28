import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";





const connectionDB =async ()=>{
 
  try {

   const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`\n Mondodb conneted !! DB HOST: ${connectionInstance.connection.host}`);
  //  console.log(connectionInstance);

    
  } catch (error) {
    console.error("MONGODB connection FAILED",error.message);
    process.exit(1)
  }

}


export default connectionDB