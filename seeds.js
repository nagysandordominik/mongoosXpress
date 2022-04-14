const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {   
        console.log('Connection is open! - Mongo')
    })
    .catch(err => {
        console.log('Error occured - Mongo')
        console.log(err)
    })

const p = new Product({
        name: 'Ruby Grapefruit',
        price: 2.99,
        category: 'fruit'
})

// p.save().then(p => {
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// })

const seedProducts = [
    {
        name: 'Cucumber',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Tomato',
        price: 2.00,
        category: 'vegetable'
    },
    {
        name: 'Dragonfruit',
        price: 3.00,
        category: 'fruit'
    },
    {
        name: 'Apple',
        price: 1.50,
        category: 'fruit'
    },

]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })