const account = require('express').Router();
const {
    
    getAccount,
    getaAccWithStdProfile,
    getaPopulateFunction

} = require('../controller/accountCntrl');
account.get('/getAccount',getAccount);
account.get('/getaPopulateFunction',getaPopulateFunction);
account.get('/getAccWithStdProfile',getaAccWithStdProfile);
module.exports = account;