const router = require('express').Router();
const {
    addProfile,
    getProfile,
   
} = require('../controller/studentProfileCntrl');
router.post('/addProfile',addProfile);
router.get('/getProfile',getProfile);
module.exports = router;