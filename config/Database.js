const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("MongoDB Connected!");
    }).catch((error) => {
        console.log(`Database Connection Failed: ${error}`);
    });
}

module.exports = dbConnect;