import express from 'express';
const router = express.Router();

const Post = require('../models/post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/', async (req, res) => {
    const facture = new Post({
        user: req.body.user,
        contenu: req.body.contenu,
        date: req.body.date,
        image: req.body.image,
    })
    try {
        const savedFacture = await facture.save();
        res.json(savedFacture);
    } catch (err) {
        res.json({ message: err });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    user: req.body.user,
                    contenu: req.body.contenu,
                    date: req.body.date,
                    image: req.body.image,
                }
            }
        );
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await Post.findByIdAndDelete({ _id: req.params.id });
        res.json(deletePost);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;