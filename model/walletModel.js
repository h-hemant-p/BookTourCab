import mongoose from "mongoose";

import withdrawDetails from "./withdrawDetailModel.js";
import creditDetails from "./creditDetailModel.js";

var walletModel = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    wallet_amount : {
        type : Number,
        required : true,
        default : 0
    },
    withdraw_history:[withdrawDetails.schema],
    credit_history : [creditDetails.schema]
});

var wallets = mongoose.model("wallets",walletModel,"wallets");
export default wallets;