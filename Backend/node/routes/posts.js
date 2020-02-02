const express = require('express');
const isAuth = require('../authCheck/authCheck')
const router = express.Router();
const path = require('path');
const PostsModel = require('../models/posts');
const UsersModel = require('../models/users')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '../images/'));
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
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


router.get('/content/:mongoId', (req, res) => {
  console.log(req.params)
  PostsModel.findPosts({_id:req.params.mongoId},

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
    ' postId , title , content , likes , views , _id ',
    'userId',
    'username userPhoto');
});

router.get('/id/:postId',isAuth, (req, res) => {
  PostsModel.findPosts(
    req.params,
    (response) => {
      res.status(200).json({
        serverStat: '1',
        request: response,
        username: req.userData['username'],
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

router.post('/isLiked/:postMongoId',isAuth , (req,res)=> {
  UsersModel.findUsers(
    {_id:req.userData.userId},
    (response) => {
        let array = response[0].postsLiked;
        if(array.includes(req.params.postMongoId)) {
          res.send(
            {
              serverStat:0,
              message:"Liked"
            }
          )
        }
        else {
          res.send(
            {
              serverStat:0,
              message:"unLiked"
            }
        )};
    },
    (error) => {
      console.log(error);
      res.status(500).json({
        serverStat: '2',
      });
    },
    ' postsLiked ',)
  
})





router.post('/liking/:postMongoId',isAuth , (req,res)=> {
  PostsModel.findOneAndUpdate(
    {_id:req.params.postMongoId},
    { 
      $inc: { likes: 1 } 
   }, {new: true })
   .then(
     
    UsersModel.findOneAndUpdate(
      { username: req.userData['username'] }, 
      { $push: { postsLiked :  req.params.postMongoId} },
      ()=>{
        console.log(req.userData);
          res.status(201).json({
          serverStat:0,
          message: "Liked"
        });
      }
  ))
.catch(err => {
  console.log(err);
  res.status(500).json({
    serverStat:2,
    error: err
  });
});
})


router.post('/unliking/:postMongoId',isAuth , (req,res)=> {
  PostsModel.findOneAndUpdate(
    {_id:req.params.postMongoId},
    { 
      $inc: { likes: -1 } 
   }, {new: true })
   .then(
     
    UsersModel.findOneAndUpdate(
      { username: req.userData['username'] }, 
      { $pull: { postsLiked :  req.params.postMongoId} },
      ()=>{
        console.log(req.userData);
          res.send({
          serverStat:0,
          message: "unLiked"
        });
      }
  ))
.catch(err => {
  console.log(err);
  res.send({
    serverStat:2,
    error: err
  });
});
})



router.post('/add',upload.single('thumbnail'), isAuth, (req, res) => {
  PostsModel.addPost(req, res);
});

router.post('/update/:id', isAuth,(req, res) => {
  console.log(req)
  PostsModel.findOneAndUpdate(
    { postId: req.query.id }, 
    req.body,
    {new: true } ,
    (err,response) => {
      if (err) console.log(err);
            res.status(201).json({
            serverStat:0,
            message: response
          });
        })}
    );


module.exports = router;
