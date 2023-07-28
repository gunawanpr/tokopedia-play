const mongoose = require('mongoose');
const Comment = require("./comment");
const Product = require("./product");

const videoSchema = new mongoose.Schema({
    videoId: {
        required: true,
        type: Number
    },
    urlImg: {
        required: true,
        type: String
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: Comment }],
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: Product }]
    
})

module.exports = mongoose.model('Video', videoSchema);