import mongoose from 'mongoose';

import vehicleImages from './vehicleImageModel.js';
import feedbacks from './feedbackModel.js';

var vehicleModel = mongoose.Schema({
    reg_number :{
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    model : {
        type : String,
        required : true
    },
    manufacture_year :{
        type : Date,
        required : true
    },
    registration_year :{
        type : Date,
        required : true
    },
    fuel_type :{
        type : String,
        enum :['CNG','Petrol','Diesel','Electric'],
        required : true
    },
    vehicle_class :{
        type : String,
        enum : ['Car/Taxi','Minibus'],
        required : true
    },
    seating_capacity:{
        type :Number,
        required : true
    },
    doors:{
        type : Number,
        required : true
    },
    air_bags : {
        type : Number,
        required : true
    },
    mileage:{
        type : Number,
        required : true
    },
    rent:{
        type : Number,
        required : true
    },
    automatic : {
        type : Boolean,
        required : true
    },
    ac :{
        type : Boolean,
        required : true
    },
    driver : {
        type : Boolean,
        required : true
    },
    rc_book_image:{
        type : String,
        required : true,
    },
    have_insurance :{
        type : Boolean,
        required : true,
        default : false
    },
    is_booked :{
        type : Boolean,
        required : true,
        default : false
    },
    insurance_details : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "vehiclesInsurance",
        required : false
    },
    images : [vehicleImages.schema],
    rating : {
        type : Number,
        required : false
    },
    feedback:[feedbacks.schema]
});

var vehicles = mongoose.model('vehicles',vehicleModel,'vehicles');
export default vehicles; 