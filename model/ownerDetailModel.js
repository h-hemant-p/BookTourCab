import mongoose from "mongoose";

import reservedDrivers from "./reservedDriverModel.js";
import vehicles from "./vehicleModel.js";

var ownerDetailModel = mongoose.Schema({
    total_vehicles:{
        type : Number,
        required : true,
        default : 0
    },
    total_drivers:{
        type:Number,
        required : true,
        default : 0
    },
    drivers:[reservedDrivers.schema],
    vehicles :[vehicles.schema]
});

var ownerDetails = mongoose.model("ownerDetails",ownerDetailModel,"ownerDetails");
export default ownerDetails;