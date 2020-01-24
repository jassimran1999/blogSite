const express = require('express');
const router = express.Router();
const PostsModel = require('./../models/posts');
const UserModel = require('./../models/users');


router.get('/homedata', (req, res) => {
    let postValues = {};
    PostsModel.findPosts('', (error,postValues, response) => {
        
        if (error) console.log("Error is: ", error);
        if (response) {
            postValues = response[0];
             console.log("Success response is: ", response);

            //res.send(response[0]);
        }
    });
    console.log(postValues)
});