const express = require('express');
const isAuth = require('../authCheck/authCheck')
const router = express.Router();
const PostsModel = require('../models/posts');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '../images/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});



router.get('/content/:postId', (req, res) => {
  PostsModel.findPosts(req.params,

    (response) => {
      res.status(200).json({
        serverStat: '0',
        request: response[0],
      });
    },
    (error) => {
      console.log(error);
      res;
      status(500).json({
        serverStat: '2',
      });
    },
    ' postId , title , content , likes , views ',
    'userId',
    'username userPhoto');
});

router.get('/id/:postId',isAuth, (req, res) => {
  PostsModel.findPosts(
    req.params,
    (response) => {
      res.status(200).json({
        serverStat: '0',
        request: response,
      });
    },
    (error) => {
      console.log(error);
      res.status(500).json({
        serverStat: '2',
      });
    },
    ' _id ',
  );
});


router.post('/add',upload.single('thumbnail'), isAuth, (req, res) => {
  console.log(req.body);
  PostsModel.addPost(req, 
    (response) => {
      console.log('Success response is: ', response);
      res.send(response);
    },
    (error) => {
      
    }
  );
});

router.put('/updatePost', isAuth, (req, res) => {
  PostsModel.updatePost(req.query, (error, response) => {
    if (error) console.log('Error is: ', error);
    if (response) {
      // console.log("Success response is: ", response);
      res.send(response);
    }
  });
});

router.delete('/deletePost', isAuth, (req, res) => {
  PostsModel.deletePost(req.query, (error, response) => {
    if (error) console.log('Error is: ', error);
    if (response) {
      // console.log("Success response is: ", response);
      res.send(response);
    }
  });
});

module.exports = router;
