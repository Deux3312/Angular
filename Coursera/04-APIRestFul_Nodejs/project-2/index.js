const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbConnect = require('./db/dbConnect');
const User = require('./db/userModel');
const newUser = new User({
    email: 'helen.bonilla@grupolaeisz.com',
    password: 'password123'
})


app.get('/', (req, resp) => {
    resp.send('Hello World');
})

app.listen(3000, (req, resp) => {
    console.log('Server is running on port 3000', resp);
});