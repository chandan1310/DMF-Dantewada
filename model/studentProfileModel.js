const mongoose = require('mongoose');
const express = require('express')
const app = express()


 const detail = mongoose.Schema({
    name :{type: String,require: true},
    email :{type: String,require: true},
    phone_No :{type: String,require: true},
    designation :{type: String,require: false},
})
const Details =mongoose.model('studentProfile',detail);
module.exports =Details;





// app.listen('4040', () => console.log(`Server running on port ${PORT}`));