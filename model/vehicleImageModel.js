import mongoose from "mongoose";

var vehicleImageModel = mongoose.Schema({
    image :{
        type : String,
        required:true
    },
    description : {
        type : String,
        required : false
    }
})

var vehicleImages = mongoose.model('vehicleImages',vehicleImageModel,'vehicleImages');
export default vehicleImages;