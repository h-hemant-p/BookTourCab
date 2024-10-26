import mongoose from 'mongoose';


var adminModel = mongoose.Schema({
    contact_no :{
        type:Number,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    name:{
        type:String,
        required : true
    },
    gender:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    },
    profile_image : {
        type : String,
        required : true
    }
});

var admin = mongoose.model("admin",adminModel,"admin");
export default admin;


// db.admin.insertOne({
//     contact_no : "7887329713",
//     email : "admin@gmail.com",
//     name : "admin",
//     gender : "male",
//     password : "2b3bdc53a332daaf96dc5afa224c9e86036b9b9c40cba884987835418848a997 "
// });