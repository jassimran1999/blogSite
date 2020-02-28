'use strict';
const express = require('express');
const isAuth = require('../authCheck/authCheck')
const router = express.Router();
const UsersModel = require('./../models/users');
const path = require('path')
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







router.get('/profile/:username', (req, res) => {
  UsersModel.findUsers(
    req.params,
    (response) => {
      if (response) {
        res.status(200).json({
          serverStat: '0',
          request: response,
        });
      }
    },
    (error) => {
      console.log(error);
      res.status(500).json({
        serverStat: '2',
      });
    },
    '_id username name description userPhoto followers following postArr email postsLiked ',
    'postArr',
    'title likes thumbnail views description _id',
  );
});


router.post("/add", (req, res, next) => {
  UsersModel.addUser(req,res);
});


router.post("/login",  (req, res, next) => {
  UsersModel.loginUser(req,res);
});

router.post('/isfollowed/:userMongoId',isAuth , (req,res)=> {
  UsersModel.findUsers(
    {_id:req.userData.userId},
    (response) => {
        let array = response[0].followingIds;
        if(array.includes(req.params.userMongoId)) {
          res.send(
            {
              serverStat:0,
              message:"followed"
            }
          )
        }
        else {
          res.send(
            {
              serverStat:0,
              message:"unfollowed"
            }
        )};
    },
    (error) => {
      console.log(error);
      res.status(500).json({
        serverStat: '2',
      });
    },
    ' followingIds ',)
  
})

router.post('/follow/:userMongoId',isAuth , (req,res)=> {
  UsersModel.findOneAndUpdate(
    {_id:req.params.userMongoId},
    { 
      $inc: { followers: 1 } 
    }, 
   {new: true }
   )
   .then(()=>
   UsersModel.findOneAndUpdate(
    { username: req.userData['username'] }, 
    { 
      $inc: { following: 1 } 
    }, 
   {new: true }
   )
   )
   .then(()=>{
    UsersModel.findOneAndUpdate(
      { username: req.userData['username'] }, 
      { $push: { followingIds :  req.params.userMongoId} },
      (err,response) => {
        if (err) console.log(err);
          UsersModel.findOneAndUpdate(
          { _id: req.params.userMongoId }, 
          { $push: { followedBy : req.userData['userId'] } },
          (err,response)=>{
            if (err) console.log(err);
              res.status(201).json({
              serverStat:0,
              message: "followed"
            });
          })}
      )})
  })

  router.post('/unfollow/:userMongoId',isAuth , (req,res)=> {
    UsersModel.findOneAndUpdate(
      {_id:req.params.userMongoId},
      { 
        $inc: { followers: -1 } 
     }, {new: true })
     .then(()=>
   UsersModel.findOneAndUpdate(
    { username: req.userData['username'] }, 
    { 
      $inc: { following: -1 } 
    }, 
   {new: true }
   )
   )
     .then(()=>{
      UsersModel.findOneAndUpdate(
        { username: req.userData['username'] }, 
        { $pull: { followingIds :  req.params.userMongoId} },
        (err,response) => {
          if (err) console.log(err);
            UsersModel.findOneAndUpdate(
            { _id: req.params.userMongoId }, 
            { $pull: { followedBy : req.userData['userId'] } },
            (err,response)=>{
              if (err) console.log(err);
                res.status(201).json({
                serverStat:0,
                message: "unfollowed"
              });
            })}
        )})
    })




router.post('/update', isAuth,(req, res) => {
  console.log(req)
  UsersModel.findOneAndUpdate(
    { username: req.userData['username'] }, 
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

//username: req.userData['username'],
