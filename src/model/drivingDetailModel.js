import mongoose from "mongoose";
import connection from "../db/connection";

import feedbacks from "./feedbackModel";
// import wallets from "./walletModel";

var drivingDetailModel = mongoose.Schema({
    experience_year:{
        type : Number,
        required : false
    },
    dl_number:{
        type : String,
        required : false
    },
    dl_issue_date:{
        type : Date,
        required : false
    },
    dl_expiry_date:{
        type : Date,
        required : false
    },
    dl_class : {
        type : String,
        enum:["LMV","MCWG","MCWOG","HMV","HGMV","LMV-NT","LMV-T"],
        required : false
    },
    dl_image:{
        type : Buffer,
        required : false
    },
    rating : {
        type : Number,
        required : false
    },
    feedback:[feedbacks],
    wallet:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'wallets',
        required : true
    }
});

var drivingDetails = mongoose.model("drivingDetails",drivingDetailModel,"drivingDetails");
export default drivingDetails; 