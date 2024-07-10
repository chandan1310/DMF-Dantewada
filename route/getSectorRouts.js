const sector = require('express').Router();
const {
    
    getSector,
    getVillage,


} = require('../controller/getSectorCntrl');
sector.get('/getSector',getSector);
sector.get('/getVillage',getVillage);

module.exports = sector;