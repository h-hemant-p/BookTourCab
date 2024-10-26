import mongoose from "mongoose";

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