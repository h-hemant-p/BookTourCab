import mongoose from "mongoose";
import connection from "../db/connection";

var vehicleInsuranceModel = mongoose.Schema({
    policy_number :{
        type : String,
        required : true
    },
    policy_holder_name :{
        type : String,
        required : true
    },
    policy_holder_contact_info :{
        type : String,
        required : true
    },
    policy_holder_aadhar_no:{
        type : BigInt,
        required : true
    },
    insurance_provider : {
        type : String,
        required : true
    },
    coverage_start_date :{
        type : Date,
        required : true
    },
    coverage_end_date :{
        type : Date,
        required : true
    },
    premium_amount:{
        type : BigInt,
        required : true
    }
});

var vehiclesInsurance = mongoose.model("vehiclesInsurance",vehicleInsuranceModel,"vehiclesInsurance");
export default vehiclesInsurance;