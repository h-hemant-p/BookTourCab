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
    male:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    },
    prifile_image : {
        type : String,
        required : true
    }
});

var admin = mongoose.model("admin",adminModel,"admin");
export default admin;