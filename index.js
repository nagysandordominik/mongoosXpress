const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {   
        console.log('Connection is open! - Mongo')
    })
    .catch(err => {
        console.log('Error occured - Mongo')
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/terminator', (req,res) => {
    res.send("I'll be back")
})
app.listen(3000, () => {
    console.log('Skynet is online...')
})