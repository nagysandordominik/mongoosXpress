const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/terminator', (req,res) => {
    res.send("I'll be back")
})
app.listen(3000, () => {
    console.log('Skynet is online...')
})