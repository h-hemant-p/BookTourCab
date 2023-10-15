import mongoose from 'mongoose';
import connection from '../db/connection.js';

// import vehicles from './vehicleModel.js';
// import reservedDrivers from './reservedDriverModel.js';
// import drivingDetails from './drivingDetailModel.js';
// import ownerDetails from './ownerDetailModel.js';

var userModel = mongoose.Schema({
    contact_no:{
        type:Number,
        required:true,
        unique : true
    },
    email:{
        type:String,
        required:true,
        unique : true
    },
    password : {
        type : String,
        required : false
    },
    name:{
        type:String,
        required:false
    },
    profile_img : {
        type : Buffer,
        required : false
    },
    is_driver:{
        type:Boolean,
        default:false
    },
    is_owner:{
        type:Boolean,
        default:false
    },
    is_complete:{
        type:Boolean,
        default:false
    },
    user_status:{
        type : Boolean,
        default : true
    },
    gender :{
        type : String,
        required : false
    },
    address : {
        type : String,
        required : false
    },
    city :{
        type : String,
        required : false
    },
    state :{
        type : String,
        required : false
    },
    pin_code :{
        type : Number,
        required : false
    },
    aadhar_number :{
        type : BigInt,
        required : false
    },
    aadhar_image :{
        type : Buffer,
        required : false
    },
    pan_number :{
        type : String,
        required : false
    },
    pan_image:{
        type : Buffer,
        required : false
    },
    owner_details:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'ownerDetails',
        required : false
    },
    driving_details : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'drivingDetails',
        required : false
    }
});

var users = mongoose.model('users',userModel,'users');
export default users;