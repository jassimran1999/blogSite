const mongoose = require('mongoose');

const users = new mongoose.Schema({

  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  description: String,
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, unique: true },
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
  }],
  followingIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  postsLiked: [{
    postId: String,
  }],
  currentlyReading: [{
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
    percentRead: Number,
  }],
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

UsersModel.findUserForLogin = function (req, callBack) {
  const user = { username: req.body.username, password: req.body.password };
  UsersModel.find(user, callBack);
};

UsersModel.addUser = function (req, callBack) {
  const user = req;
  console.log(user);
  UsersModel.create(user, callBack);
};

UsersModel.updateUsers = function (req, callBack) {
  const query = { _id: req.body._id };
  const user = req.body;
  UsersModel.updateOne(query, user, callBack);
};

module.exports = UsersModel;
