const express = require('express');
const router = express.Router();
router.get('/', function (req, res) {
    res.send('home');
});
const Post = require('../models/post');

router.get('/', function (req, res) {
    let posts = Post.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.send(posts);
        }
    });
});
module.exports = router;