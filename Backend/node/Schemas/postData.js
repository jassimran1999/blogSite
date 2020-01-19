let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const postSchema = new Schema({

    id:String,
    title : String,
    createdAt : Date,
    content: String,
    likes: Number,
    imgUrl:String,
    thumbnail:String,
    views:Number,
    
});



let Post = mongoose.model('Post', postSchema);
module.exports = Post;