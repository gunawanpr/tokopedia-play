const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    videoId: {
        required: true,
        type: Number
    },
    username: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: String
    },
    timeStamp: {
        required: true,
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Comment', commentSchema);