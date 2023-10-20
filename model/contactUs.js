import mongoose from 'mongoose';

var contactUsModel = mongoose.Schema({
    contact_no :{
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    role : {
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