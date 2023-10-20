import mongoose from "mongoose";

var withdrawDetailModel = mongoose.Schema({
    transaction_id:{
        type :String,
        // unique : true,
        reqired : true
    },
    amount : {
        type : Number,
        reqired : true
    },
    date :{
        type : Date,
        reqired : true
    },
    time :{
        type : String,
        reqired : true
    },
    gst_amount : {
        type : Number,
        reqired : true
    },
    platform_charges :{
        type : Number,
        reqired : true
    },
    in_hand_amount :{
        type : Number,
        reqired : true
    },
    withdraw_method : {
        type : String,
        enum :["UPI","Bank"],
        reqired : true
    },
    upi_id : {
        type : String,
        reqired : false
    },
    bank : {
        type : String,
        reqired : false
    },
    ifsc_code : {
        type : String,
        reqired : false
    },
    acc_number:{
        type : Number,
        reqired : false
    }
}); 

var withdrawDetails = mongoose.model("withdrawDetails",withdrawDetailModel,"withdrawDetails");
export default withdrawDetails;