const locationRouts = require('express').Router();
const {
    getLocation
   
} = require('../controller/locationController');
locationRouts.get('/getLocation',getLocation);
module.exports = locationRouts;