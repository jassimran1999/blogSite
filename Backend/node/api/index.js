var port = 5000
const express = require('../node_modules/express');
const bodyParser = require("body-parser");
require('../dbConnection');
var users = require('../routes/users');
var posts = require('../routes/posts');
var homePost = require('../routes/home');
const UsersModel = require('../models/users');
const session = require('express-session');
//var mongoose = require('../node_modules/mongoose')
//mongoose.connect('mongodb://localhost/blogDb')
//var User = require('../Schemas/userData')
//var Post = require('../Schemas/postData')
var app = express()
var cookieValidator = (req, res, next) => {
    if (req.session.username) {
        UsersModel.findUsers(req, (err, res) => {
            if (err) res.status(401).send("User not authenticated");
            if (res && res.length == 0) {
                res.status(401).send("User not authenticated");
            }
            if (res && res.length > 0) {
                next();
            }
        })
    } else {
        res.status(401).send("User not authenticated");
    }
}

app.use(bodyParser.json());
app.use(session({
    key: "blog",
    secret: "blogsecret"
}))

app.use("/", express.static('static'))
app.use("/home", express.static('static'))


app.use("*", (req, res, next) => {
    console.log("center");
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "*")
    next();
})

app.use('/users', users);
// app.use('/posts', cookieValidator, posts);
app.use('/posts', posts);

app.use('/home',homePost);

app.get("/homedata", function (req, res) {
    res.send("Blog");
})
app.listen(port , ()=>{console.log(`Listening on Port ${port}`)})




// backend 
