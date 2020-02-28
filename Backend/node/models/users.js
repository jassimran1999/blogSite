const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const tokenSecret = "blogSecret";
const users = new mongoose.Schema({

  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  description: String,
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  phoneNumber: { type: Number , unique: true},
  createdAt: Date,
  userPhoto: String,
  followers: Number,
  following: Number,
  postArr: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
  followedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique:true
  }],
  followingIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique:true
  }],
  postsLiked: [{
    type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      unique:true
  }],
  currentlyReading: [{type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    unique:true}],
});

const UsersModel = mongoose.model('User', users);

UsersModel.findUsers = function (req, callBack, error, selectors, join, populateSelector) {
  UsersModel
    .find(req)
    .select(selectors)
    .populate(join, populateSelector)
    .exec()
    .then(callBack)
    .catch(error);
};


UsersModel.addUser = function (req,res) {
  UsersModel
    .find({ email: req.body.email })
    .exec()
    .then(
      user => {
        if (user.length >= 1) {
          return res.status(409).json({
            serverStat:5,
            message: "Mail exists"
          });
        } 
        else {
          UsersModel
          .find({username: req.body.username})
          .exec()
          .then(
            user => {
              if(user.length >= 1) {
                return res.status(409).json({
                  serverStat:1,
                  message: "User exists"
                });
              }
              else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                  if (err) {
                    return res.status(500).json({
                      serverStat:2,
                      error: err
                    });
                  } 
                  else {
                    const user = new UsersModel({
                      _id: new mongoose.Types.ObjectId(),
                      username: req.body.username,
                      email: req.body.email,
                      password: hash,
                      createdAt: Date.now(),
                      userPhoto: "https://cda.kaust.edu.sa/_layouts/KAUST_ResearchCenters_Template/images/DefaultPersonPhoto.png",
                      phoneNumber: '',
                      followers: 0,
                      following: 0,
                      postArr: [ ],
                      followedBy: [ ],
                      followingIds: [ ],
                      postsLiked: [ ],
                      currentlyReading: [ ],
                    });
      
                    user
                    .save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                          serverStat:0,
                          message: "User created"
                        });
                      })
                    .catch(err => {
                      console.log(err);
                      res.status(500).json({
                        serverStat:2,
                        error: err
                      });
                    });
                }
              });
            }
            }
          )
        }
    });
};


UsersModel.loginUser = function (req,res) {

  UsersModel
    .find({ username: req.body.username })
    .exec()
    .then(user => {

      if (user.length < 1) {
        return res.status(401).json({
          serverStat:5,
          message: "Auth failed"
        });
      }

      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            serverStat:2,
            message: "Auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user[0].username,
              userId: user[0]._id
            },
            tokenSecret,
            {
                expiresIn: "1h"
            }
          );
          return res.status(200).json({
            serverStat:0,
            message: "Auth successful",
            token: token
          });
        }
        res.status(401).json({
          serverStat:5,
          message: "Auth failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        serverStat:2,
        error: err
      });
    });

};

UsersModel.updateUsers = function (req, callBack) {
  const query = { _id: req.body.id };
  const user = req.body;
  UsersModel.updateOne(query, {$set: {username:req.body.username}}, // Update
  {upsert: true}, callBack);
};

module.exports = UsersModel;
