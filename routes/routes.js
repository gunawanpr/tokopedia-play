const express = require('express');
const router = express.Router();

const Video = require('../models/video');
const Comment = require('../models/comment');
const Product = require('../models/product');

// routes for videos

router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find();
        if (videos.length === 0) {
            res.send('Data belum ada, silahkan tambah data!');
        } else {
            res.json(videos);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/videos/:id', async (req, res) => {
    try {
        const video = await Video.find({videoId: req.params.id});

        if (video.length === 0) {
            res.send('Data yang dicari tidak ada!');
        } else {
            res.json(video);
        }

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/videos/new', (req, res) => {
    const video = new Video({
        videoId: req.body.videoId,
        urlImg: req.body.urlImg
    })

    if (!req.body.videoId || !req.body.urlImg) {
            return res.status(400).send('Semua data harus diisi dengan sesuai!');
        }

    try {
        const newVideo = video.save();
        res.send('Video ditambahkan!');
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

// routes for comments

router.post('/videos/:id/comments', async (req, res) => {
    try {

        const video = await Video.findOne({videoId: req.params.id});
    
        if(!video) {
            return res.status(400).json({message: error.message});
        }

        if (!req.body.username || !req.body.comment) {
            return res.status(400).send('Semua data harus diisi dengan sesuai!');
        }
    
        const newComment = new Comment({
            videoId: req.params.id,
            username: req.body.username,
            comment: req.body.comment
        })

        video.comments.push(newComment._id);
        newComment.save();
        const newVideo = video.save();
        res.send(`Komentar ditambahkan pada video ${video.videoId}!`);

    }
    catch (error) {
        res.send('Tidak bisa menambahkan komentar pada video yang tidak ada!');
    }

});

router.get('/videos/:id/comments', async (req, res) => {
    try {
        const video = await Video.find({videoId: req.params.id});
    
        if(!video) {
            return res.status(400).json({message: error.message});
        }

        const comment = await Comment.find({videoId: req.params.id});

        if (comment === null) {
            res.send('Tidak ada komentar pada video ini!');
        } else {
            res.json(comment);
        }
        

    }
    catch (error) {
        res.status(500).json({ message: 'Error dengan server!' });
    }
});


// routes for product

router.post('/videos/:id/product', async (req, res) => {
    try {

        const video = await Video.findOne({videoId: req.params.id});
    
        if(!video) {
            return res.status(400).json({message: error.message});
        }

        if (!req.body.productId || !req.body.urlProduct || !req.body.title || !req.body.price) {
            return res.status(400).send('Semua data harus diisi dengan sesuai!');
        }
    
        const newProduct = new Product({
            videoId: req.params.id,
            productId: req.body.productId,
            urlProduct: req.body.urlProduct,
            title: req.body.title,
            price: req.body.price
        })

        video.products.push(newProduct._id);
        newProduct.save();
        const newVideo = video.save();
        res.send('Product telah ditambahkan!');

    }
    catch (error) {
        res.send('Tidak bisa menambahkan produk pada video yang tidak ada!');
    }

});

router.get('/videos/:id/product', async (req, res) => {
    try {
        const video = await Video.find({videoId: req.params.id});
    
        if(!video) {
            return res.status(400).json({message: error.message});
        }

        const product = await Product.findOne({videoId: req.params.id});

        if (product === null) {
            res.send('Tidak ada produk pada video ini!');
        } else {
            res.json(product);
        }

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
