const mongoose =require("mongoose");

const getSector =mongoose.Schema({

    Sector_name:String,
    Sector:String,
    proposed_amount:Number,
    sanction_work:Number,
    sanctioned_amount:Number,
    percent_of_work:String,
    fund_released:Number,
    expenditure:Number,
    work_ompleted:Number,
    work_uncomplete:Number
    
})
module.exports = mongoose.model('sector',getSector);