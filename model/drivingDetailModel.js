import mongoose from "mongoose";

import feedbacks from "./feedbackModel.js";

var drivingDetailModel = mongoose.Schema({
    experience_year:{
        type : Number,
        required : true
    },
    dl_number:{
        type : String,
        required : true
    },
    dl_issue_date:{
        type : Date,
        required : true
    },
    dl_expiry_date:{
        type : Date,
        required : true
    },
    dl_class : {
        type : String,
        enum:["LMV","MCWG","MCWOG","HMV","HGMV","LMV-NT","LMV-T"],
        required : true
    },
    dl_image:{
        type : String,
        required : false
    },
    rating : {
        type : Number,
        required : true,
        default : 0
    },
    feedback:[feedbacks.schema]
});

var drivingDetails = mongoose.model("drivingDetails",drivingDetailModel,"drivingDetails");
export default drivingDetails; 