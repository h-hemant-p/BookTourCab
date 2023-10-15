import mongoose from "mongoose";
import connection from "../db/connection";

import withdrawDetails from "./withdrawDetailModel";
import creditDetails from "./creditDetailModel";

var walletModel = mongoose.Schema({
    wallet_amount : {
        type : Number,
        required : true
    },
    withdraw_history:[withdrawDetails],
    credit_history : [creditDetails]
});

var wallets = mongoose.model("wallets",walletModel,"wallets");
export default wallets;