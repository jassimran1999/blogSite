const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const PostsModel = require('../models/posts');


router.get('/homedata', (req, res) => {
    PostsModel.findPosts(
      {},
      (response) => {
        res.status(200).json({
          serverStat: '1',
          request: response,
        });
      },
      (error) => {
        console.log(error);
        res.status(500).json({
          serverStat: '2',
        });
      },
      ' _id title thumbnail description postId',
      'userId',
      'username userPhoto'
    );

});


module.exports = router;
