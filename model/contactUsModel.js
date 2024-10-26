import mongoose from 'mongoose';


var contactUsModel = mongoose.Schema({
    contact_no :{
        type : Number,
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