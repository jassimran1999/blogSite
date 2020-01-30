
const mongoose = require('mongoose');
const PostsModel = require('../models/posts');
const UserModel = require('../models/users');

findHomePosts = function () {
  mongoose.connection.collection(PostsModel).aggregate([
    {
      $lookup:
                    {
                      from: UserModel,
                      localField: 'userId',
                      foreignField: 'username',
                      as: 'homedetails',
                    },
    },
  ]).toArray((err, res) => {
    if (err) throw err;
    console.log(JSON.stringify(res));
  });
};
