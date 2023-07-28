const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    videoId: {
        required: true,
        type: Number
    },
    productId: {
        required: true,
        type: Number
    },
    urlProduct: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Product', productSchema);