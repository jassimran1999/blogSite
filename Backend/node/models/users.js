const mongoose = require('mongoose');

const users=new mongoose.Schema({
    
    username: { type: String, required: true, unique: true },
    password: {type: String, required:true},
    name: String,
    description: String,
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, unique: true },
    createdAt: Date,
    userPhoto: String,
    followers: Number,
    following: Number,
    postArr: [{
        postId:String,
    }],
    followedBy:[{
        userId:String,
        }],
    followingIds:[{
        userId:String,
    }],
    postsLiked:[{
        postId:String,
    }],
    currentlyReading:[{
        postId:String,
        percentRead:Number,
    }],
});

const UsersModel = mongoose.model("User", users);

UsersModel.findUsers=function (req,callBack) {
    console.log(req)
    UsersModel.find(req,callBack);
}

UsersModel.findUserForLogin = function (req, callBack) {
    let user = { username: req.body.username, password: req.body.password };
    UsersModel.find(user, callBack);
}

UsersModel.addUser = function (req, callBack) {
    let user = req.body;
    UsersModel.create(user, callBack);
}

UsersModel.updateUsers = function (req, callBack) {
    let query = { _id: req.body._id };
    let user = req.body;
    UsersModel.updateOne(query, user, callBack);
}

module.exports = UsersModel;



