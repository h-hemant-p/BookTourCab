import mongoose from "mongoose";
import connection from "../db/connection";

var vehicleImageModel = mongoose.Schema({
    url:{
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    image :{
        type : Buffer,
        required:true
    },
    description : {
        type : String,
        required : false
    }
})

mongoose.model('vehicleImages',vehicleImageModel,'vehicleImages');
export default vehicleImages;