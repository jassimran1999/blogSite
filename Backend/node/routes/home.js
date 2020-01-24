const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PostsModel = require('../models/posts');


router.get('/homedata', (req, res) => {
    PostsModel.findPosts({}, (error, response) => {
        
        if (error) console.log("Error is: ", error);
        if (response) {
             //console.log("Success response is: ", response);
            res.send(response);
        }
    });
});



module.exports = router;