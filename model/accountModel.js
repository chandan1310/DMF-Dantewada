const mongoose =require("mongoose");

const getAccount =mongoose.Schema({

    bank_name:String,
    account_no:String,
    bank_holder_name:String,
    ifsc:String,
})
module.exports = mongoose.model('payment',getAccount);