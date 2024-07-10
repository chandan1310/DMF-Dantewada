const express = require('express');
const app = express();
require("./dataBaseConnecttion/db").connect();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// const sturdentRoute =require('./route/studentRoute')
// app.use('/studentRoute',sturdentRoute);
// const getLocationRoutes =require('./route/locationRoutes');
// app.use('/locationRouts',getLocationRoutes);
// const getAccount =require('./route/accountRouts');
// app.use('/accountRouts',getAccount);
const getSectorRouts =require('./route/getSectorRouts')
app.use('/getSectorRouts',getSectorRouts);
app.listen('1010', () => console.log(`Server running on port `));