import mongoose from "mongoose";
// import connection from "../db/connection";

import reservedDrivers from "./reservedDriverModel";
import vehicles from "./vehicleModel";
// import wallets from "./walletModel";

var ownerDetailModel = mongoose.Schema({
    total_vehicles:{
        type : Number,
        required : false
    },
    total_drivers:{
        type:Number,
        required : false
    },
    drivers:[reservedDrivers],
    vehicles :[vehicles],
    wallet:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'wallets',
        required:true
    }
});

var ownerDetails = mongoose.model("ownerDetails",ownerDetailModel,"ownerDetails");
export default ownerDetails;