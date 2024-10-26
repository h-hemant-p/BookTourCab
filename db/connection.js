import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

var connection = mongoose.connect(process.env.DB_Host_Url).
then(()=>console.log('connection sucessful')).
catch((err)=>console.log('error',err));

export default connection;

// const { DB_Host_Url } = process.env; // Your MongoDB Atlas connection string

// mongoose.connect(DB_Host_Url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB Atlas');
// });
