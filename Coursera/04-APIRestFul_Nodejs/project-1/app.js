const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbConnect = require('./db/dbConnect');
const User = require('./db/userModel');
const newUser = new User({
    email: 'helen.bonilla@grupolaeisz.com',
    password: 'password123'
})
newUser.save()
    .then(() => {
        console.log('User inserted successfully')
    })
    .catch((error) => {
        console.log('Error inserting user: ', error)
    })


// User.find({ email: 'brayan.medina@grupolaeisz.com' })
//     .then((users) => {
//         console.log('Users found: ', users)
//     })
//     .catch((error) => {
//         console.log('Error finding user: ', error)
//     })
// dbConnect();
// module.exports = app;


User.find()
    .then((users) => {
        console.log('Users found: ', users)
    })
    .catch((error) => {
        console.log('Error finding user: ', error)
    })
dbConnect();
module.exports = app;

//updating User
// User.updateOne({ email: 'brayan.medina@grupolaeisz.com' }, { password: 'password3312' })
//     .then(() => {
//         console.log('Users updated successfully ')
//     })
//     .catch((error) => {
//         console.error('Error updated user: ', error)
//     })

// Update Many users
User.updateMany({ email: 'brayan.medina@grupolaeisz.com' }, { $set: { password: 'NEWpassword3312' } })
    .then((result) => {
        console.log('Document updated successfully:  ', result)
    })
    .catch((error) => {
        console.error('Error updated user: ', error)
    })

//delete One
// User.deleteOne({ email: 'helen.bonilla@grupolaeisz.com' })
//     .then(() => {
//         console.log('User deleted successfully')
//     })
//     .catch((error) => {
//         console.error('Error deleting user: ', error)
//     })

//delete Many
User.deleteMany({ isActive: false })
    .then((result) => {
        console.log('User deleted successfully', result)
    })
    .catch((error) => {
        console.error('Error deleting user: ', error)
    })



User.collection.createIndex({ email: 5 })
User.find({ email: 'brayan.medina@grupolaeisz.com' }).select({ email: 5, _id: 0 })
    .then((users) => {
        console.log('Users found: ', users)
    })
    .catch((error) => {
        console.log('Error finding user: ', error)
    })














// const port = 3000;
// app.use(bodyParser.json());
// let todos = [
//     { id: 1, name: 'Todo 1' },
//     { id: 2, name: 'Todo 2' },
//     { id: 3, name: 'Todo 3' },
//     { id: 4, name: 'Todo 4' },
//     { id: 5, name: 'Todo 5' },
// ];
// app.get('/todos', (req, res) => {
//     res.json(todos);
// })
// app.listen(port, () => {
//     console.log(`ejecutandose en el puerto ${port}`)
// });