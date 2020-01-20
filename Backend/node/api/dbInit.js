var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogDb')

var User = require('../Schemas/userData');
var Post = require('../Schemas/postData')

var init = new Post(
    {
        id:String,
    title : String,
    createdAt : Date,
    content: String,
    likes: Number,
    imgUrl:String,
    thumbnail:String,
    views:Number,
    userId:String,
    }
);



Post.find(
    {userId:'jv4'},
    function(err, doc) {
        if (err) throw err;
        console.log(doc)
        console.log("POST\n")}
)