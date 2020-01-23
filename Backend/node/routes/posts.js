const express = require('express');
const router = express.Router();
const PostsModel = require('./../models/posts');

router.get('', (req, res) => {
    PostsModel.findPosts(req.query, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            // console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

router.post('/addPost', (req, res) => {
    PostsModel.addPost(req.query, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            // console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

router.put('/updatePost', (req, res) => {
    PostsModel.updatePost(req.query, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            // console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

router.delete('/deletePost', (req, res) => {
    PostsModel.deletePost(req.query, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            // console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

module.exports = router;