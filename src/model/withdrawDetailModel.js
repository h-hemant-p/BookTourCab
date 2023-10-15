import mongoose from "mongoose";
import connection from "../db/connection";

var withdrawDetailModel = mongoose.Schema({
    transaction_id:{
        type :String,
        unique : true,
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
        type : BigInt,
        reqired : false
    }
}); 

var withdrawDetails = mongoose.Schema("withdrewDetails",withdrawDetailModel,"withdrewDetails");
export default withdrawDetails;