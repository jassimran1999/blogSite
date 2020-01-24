const express = require('express');
const router = express.Router();
const PostsModel = require('./../models/posts');

router.get('', (req, res) => {
    console.log(req.query);
    PostsModel.findPosts(req.query, (error, response) => {
        
        if (error) console.log("Error is: ", error);
        if (response) {
             //console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

router.get('/profile', (req, res) => {
    console.log(res.query)
    PostsModel.findPosts(req.query, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
             console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

router.post('/addPost', (req, res) => {
    console.log("hjhgjhg")
    PostsModel.addPost(req.query, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
             console.log("Success response is: ", response);
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