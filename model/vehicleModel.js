import mongoose from 'mongoose';

import vehicleImages from './vehicleImageModel.js';
import feedbacks from './feedbackModel.js';

var vehicleModel = mongoose.Schema({
    reg_number :{
        type : String,
        required : true,
        unique : true
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
        type : Number,
        required : true
    },
    registration_year :{
        type : Number,
        required : true
    },
    fuel_type :{
        type : String,
        enum :['CNG','Petrol','Desiel','Electric'],
        required : true
    },
    vehicle_class :{
        type : String,
        enum : ['Auto','Bike/Scooty','Car/Taxi','Minibus'],
        required : true
    },
    seating_capacity:{
        type :Number,
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