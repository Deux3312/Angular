const mongoose = require('mongoose');
require('dotenv').config();
async function dbConnect() {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Successfuly Connected to MongoDb Atlas')
    }).catch((error) => {
        console.log('Unable to connect to Mongo Db');
        console.log(error)
    })
}
module.exports = dbConnect;