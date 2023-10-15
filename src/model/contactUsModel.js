import mongoose from 'mongoose';
import connection from '../db/connection';

var contactUsModel = mongoose.Schema({
    contact_no :{
        type : BigInt,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    query:{
        type : String,
        required:true
    }
});

var contactUs = mongoose.model("contactUs",contactUsModel,"contactUs");
export default contactUs;