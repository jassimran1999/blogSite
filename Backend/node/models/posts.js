const mongoose = require('mongoose');
const UsersModel = require('../models/users')
const postSchema = new mongoose.Schema({
    postId:String,
    title : String,
    createdAt : Date,
    content: String,
    likes: Number,
    thumbnail:String,
    views:Number,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    description:String,
})

const PostsModel = mongoose.model('Post', postSchema);

PostsModel.findPosts = function (req,callBack,error,selector,populate,populateSelectors) {
    
    PostsModel
    .find(req)
    .select(selector)
    .populate(populate,populateSelectors)
    .exec()
    .then(callBack)
    .catch(error)
}

PostsModel.addPost = function (req,res) {
                    console.log(req.userData['userId'])

                    UsersModel.findUsers(
                        {_id: req.userData['userId']},

                        (response) => {
                            let count = response.length+1;
                            const post = new PostsModel({
                                _id: new mongoose.Types.ObjectId(),
                                postId:req.userData.username + count,
                                title : req.body.title,
                                createdAt : Date.now(),
                                content: req.body.content,
                                likes: 0,
                                thumbnail:req.file.path,
                                views:0,
                                userId:req.userData['userId'],
                                description:req.body.description,
                              });
                
                              post
                              .save()
                              .then(result => {
                                  UsersModel.findOneAndUpdate(
                                    { username: req.userData['username'] }, 
                                    { $push: { postArr: result._id } },
                                    ()=>{
                                        res.status(201).json({
                                        serverStat:0,
                                        message: "Post created"
                                      });
                                    }
                                );})
                              .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                  serverStat:2,
                                  error: err
                                });
                              });
                          },
                          (error) => {
                            console.log(error);
                            res.status(500).json({
                              serverStat: '2',
                            });
                          },
                          '  postArr ',
                            'postArr',
                    )
                  }

PostsModel.updatePost = function (req, callBack) {
    let query = { _id: req.body._id };
    let post = req.body;
    PostsModel.updateOne(query, post, callBack);
}

PostsModel.deletePost = function (req, callBack) {
    let query = { _id: req.query.id };
    PostsModel.deleteOne(query, callBack);
}

module.exports = PostsModel;