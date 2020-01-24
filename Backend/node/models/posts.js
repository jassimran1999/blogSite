const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postId:String,
    title : String,
    createdAt : Date,
    content: String,
    likes: Number,
    imgUrl:String,
    thumbnail:String,
    views:Number,
    userId:String,
    description:String,
})

const PostsModel = mongoose.model("Post", postSchema);

PostsModel.findPosts = function (req, callBack) {
    
    PostsModel.find(req, callBack);
}

PostsModel.addPost = function (req, callBack) {
    let post = req.body;
    PostsModel.create(post, callBack);
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