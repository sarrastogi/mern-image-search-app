import mongoose  from "mongoose";

import { DB_NAME } from "../constant.js";

const Connect = async() =>{
        // console.log("connection", `${process.env.MONGO_URL}/${DB_NAME}`);
        
        try {
         let connection = await mongoose.connect(
           `${process.env.MONGO_URL}/${DB_NAME}`
         );
         console.log("Db connection successfull");
        
         
        } catch (error) {
          console.log("database connection error",error);
        }
  

    
}
export default Connect
