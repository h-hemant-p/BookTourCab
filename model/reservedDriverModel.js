import mongoose from "mongoose";

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
    },
    driver_status :{
        type : String,
        required : true,
        default : "Active",
        enum : ['Active','Deactive','Blocked','Deleted']
    }
});

var reservedDrivers = mongoose.model("reservedDrivers",reservedDriverModel,"reservedDrivers");
export default reservedDrivers;