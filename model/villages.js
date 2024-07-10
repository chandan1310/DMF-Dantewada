const mongoose =require("mongoose");

const getVillage =mongoose.Schema({

    id_no:String,
    village_name:String,
    
})
module.exports = mongoose.model('village',getVillage);