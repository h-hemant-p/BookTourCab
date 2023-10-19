import mongoose from "mongoose";

var creditDetailModel = mongoose.Schema({
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
    credit_method : {
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

var creditDetails = mongoose.model("creditDetails",creditDetailModel,"creditDetails");
export default creditDetails;
