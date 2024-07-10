const mongoose = require('mongoose');
const express = require('express');

const location =mongoose.Schema({
    location:String,
    lat_long:String,
})
module.exports = mongoose.model('profiledetails',location);