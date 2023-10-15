import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

var connection = mongoose.connect(process.env.DB_Host_Url).
then(()=>console.log('connection sucessful')).
catch((err)=>console.log('error',err));

export default connection;