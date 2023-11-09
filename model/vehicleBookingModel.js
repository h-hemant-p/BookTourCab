import mongoose from "mongoose";
//
var vehicleBookingModel = mongoose.Schema({
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "users"
    },
    driver:{
        type : mongoose.Schema.Types.ObjectId,
        required : false,
        ref : "reservedDrivers"
    },
    vehicle :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "ownerDetails"
    },
    owner :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "users"
    },
    start_date : {
        type : Date,
        required : true,
    },
    end_date:{
        type : Date,
        required : true
    },
    booking_date:{
        type : Date,
        required : true
    },
    start_time:{
        type : String,
        required : true
    },
    end_time : {
        type : String,
        required : true
    },
    booking_time : {
        type : String,
        required : true
    },
    pickup_location:{
        type : String,
        required : true
    },
    destination_location : {
        type : String,
        required : true
    },
    total_time : {
        type : Number,
        required : true,
    },
    payment_method :{
        type : String,
        required : false,
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
        required : true
    },
    insurance_charges : {
        type : Number,
        required : false
    },
    total_charges : {
        type : Number,
        required : true
    },
    bookingpin : {
        type: Number,
        required : true
   },
    booking_status : {
        type : String,
        enum : ["Pending","Confirm","Rejected","Cancelled","Running","Completed"],
        required : true
   },
    driver_status : {
        type : Boolean,
        required : true
    },
    completion_pin:{
        type : Number,
        required : false
    },
    payment_status:{
        type : String,
        default : "Pending"
    }
});


var bookings  = mongoose.model("bookings",vehicleBookingModel,"bookings");
export default bookings;