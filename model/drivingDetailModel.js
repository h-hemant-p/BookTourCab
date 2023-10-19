import mongoose from "mongoose";
// import connection from "../db/connection";

import feedbacks from "./feedbackModel.js";
// import wallets from "./walletModel";

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
        type : Buffer,
        required : false
    },
    rating : {
        type : Number,
        required : false
    },
    feedback:[feedbacks.schema],
    wallet:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'wallets',
        required : true
    }
});

var drivingDetails = mongoose.model("drivingDetails",drivingDetailModel,"drivingDetails");
export default drivingDetails; 