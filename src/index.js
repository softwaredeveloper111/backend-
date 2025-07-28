import connectionDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
  path:'./env'
})





connectionDB()


/*import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";



import dotenv from "dotenv";
dotenv.config()

import express from "express";
const app = express()




;(async ()=>{
  try {

   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("ERR",error);
    throw error
   })


   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
   })

    
  } catch (error) {
    console.error("ERROR :",error.message);
  }
})()

*/