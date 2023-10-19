import mongoose from "mongoose";
import connection from "../db/connection";

var vehicleBookingModel = mongoose.Schema({
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "users"
    },
    driver :{
        type : mongoose.Schema.Types.ObjectId,
        required : false,
        ref : "users"
    },
    owner :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "users"
    },
    start_date : {
        type : Date,
        required : false,
    },
    end_date:{
        type : Date,
        required : false
    },
    start_time:{
        type : String,
        required : false
    },
    end_time : {
        type : String,
        required : false
    },
    total_distance : {
        type : Number,
        required : false,
    },
    payment_method :{
        type : String,
        required : true,
        enum : ["Online","Cash"]
    },
    transaction_id : {
        type : String,
        required : false
    },
    booking_charges : {
        type : Number,
        required : true
    },
    gst_charges : {
        type : Number,
        required : false
    },
    insurance_charges : {
        type : Number,
        required : true
    },
    total_charges : {
        type : Number,
        required : true
    }
});


var bookings  = mongoose.model("bookings",vehicleBookingModel,"bookings")