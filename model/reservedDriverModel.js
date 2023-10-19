import mongoose from "mongoose";
import connection from "../db/connection";

// import drivingDetails from './drivingDetailModel';

var reservedDriverModel = mongoose.Schema({
    contact_no:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:false
    },
    gender :{
        type : String,
        required : false
    },
    driving_detail : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'drivingDetails',
        required : true
    }
});

var reservedDrivers = mongoose.Schema("reservedDrivers",reservedDriverModel,"reservedDrivers");
export default reservedDrivers;