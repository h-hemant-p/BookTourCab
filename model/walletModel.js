import mongoose from "mongoose";
// import connection from "../db/connection";

import withdrawDetails from "./withdrawDetailModel.js";
import creditDetails from "./creditDetailModel.js";

var walletModel = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    wallet_amount : {
        type : Number,
        required : true
    },
    user_role : {
        type : String,
        required : true
    },
    withdraw_history:[withdrawDetails.schema],
    credit_history : [creditDetails.schema]
});

var wallets = mongoose.model("wallets",walletModel,"wallets");
export default wallets;