import mongoose from "mongoose";

var newsLetterModel = mongoose.Schema({
    email:{
        type:String,
        required:true,
    }
})

var newsletter = mongoose.model("newsletter",newsLetterModel,"newsletter");

export default newsletter;