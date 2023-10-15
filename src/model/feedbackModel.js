import mongoose from "mongoose";
import connection from "../db/connection";

// import users from "./userModel";

var feedbackModel = mongoose.Schema({
    rating : {
        type : Number,
        required : true
    },
    feedback :{
        type:String,
        required : false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true
    }
});

var feedbacks = mongoose.model("ratings",feedbackModel,"ratings");
export default feedbacks;