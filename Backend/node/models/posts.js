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

const PostsModel = mongoose.model("Posts", bookSchema);

PostsModel.findPosts = function (req, callBack) {
    let id = req.query.id;
    let query = {};
    if (id) {
        query = { _id: id }
    }
    PostsModel.find(query, callBack);
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

PostsModel.deleteBook = function (req, callBack) {
    let query = { _id: req.query.id };
    PostsModel.deleteOne(query, callBack);
}

module.exports = PostsModel;