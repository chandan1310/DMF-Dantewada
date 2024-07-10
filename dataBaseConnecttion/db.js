const mongoose = require('mongoose');
exports.connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/danteWada')
        .then(() => {
            console.log("Successfully connected to the database");   
        })
        .catch((error) => {
            console.log("Database connection failed. Exiting now...");
            console.error(error);
            process.exit(1); 
        });
};
// mongoose.connect('mongodb://127.0.0.1:27017/profile')
//   .then(() => console.log('database connected !'));