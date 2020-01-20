var express = require('../node_modules/express')
var mongoose = require('../node_modules/mongoose')
mongoose.connect('mongodb://localhost/blogDb')
var app = express()
var User = require('../Schemas/userData')
var Post = require('../Schemas/postData')
var port = 5000

const nilPost = {
    _id:0,
    name: 0,
  username: 0,
  description: 0,
  email: 0,
  phoneNumber: 0,
  createdAt: 0,
  follows: 0,
  following: 0,
  password: 0,
  postArr: 0,
  followed:0,
  following:0,
  postsLiked:0,
  currentlyReading:0,
}

const value = [{
    id:'jv41',
    username : 'jv4',
    title : 'Test Blog 1',
    date : Date.now(),
    content: 'The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.he new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.',
    likes: '1',
    share:'localhost:3000/jv41',
    background:"black",
    imgUrl: "https://cda.kaust.edu.sa/_layouts/KAUST_ResearchCenters_Template/images/DefaultPersonPhoto.png",

},];
// test data moved from react constant files to node backend constant files. 
const data = [
    {
        username : 'jv4',
        name : 'J. V',
        description : 'hi my name is J V. I am a human being \n work hard play hard.',
        follows: '1000',
        share:'localhost:3000/jv4',
        userPhoto: "https://cda.kaust.edu.sa/_layouts/KAUST_ResearchCenters_Template/images/DefaultPersonPhoto.png",
        follow1: '132',
        following1: '156',
        postArr: [
        {
        id:'jv21',
        username : value[0].username,
        title : value[0].title,
        date : Date.now(),
        desc:"My first Post.",
        share:'localhost:3000/jv41',
        background:"black",
        imgUrl:value[0].imgUrl,
        thumbnail:"https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    }, {
        id:'jv41',
        username : value[0].username,
        title : value[0].title,
        date : Date.now(),
        desc:"My first Post.is abd ",
        share:'localhost:3000/jv41',
        background:"black",
        imgUrl:value[0].imgUrl,
        thumbnail:"https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    }, {
        id:'jv41',
        username : value[0].username,
        title : value[0].title,
        date : Date.now(),
        desc:"My first Post.",
        share:'localhost:3000/jv41',
        background:"black",
        imgUrl:value[0].imgUrl,
        thumbnail:"https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    }, {
        id:'jv41',
        username : value[0].username,
        title : value[0].title,
        date : Date.now(),
        desc:"My first Post.",
        share:'localhost:3000/jv41',
        background:"black",
        imgUrl:value[0].imgUrl,
        thumbnail:"https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    }, {
        id:'jv41',
        username : value[0].username,
        title : value[0].title,
        date : Date.now(),
        desc:"My first Post.",
        share:'localhost:3000/jv41',
        background:"black",
        imgUrl:value[0].imgUrl,
        thumbnail:"https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    ]},
    [
            {
            id:'jv41',
            username : value[0].username,
            userPhoto: "https://cda.kaust.edu.sa/_layouts/KAUST_ResearchCenters_Template/images/DefaultPersonPhoto.png",
            title : value[0].title,
            date : Date.now(),
            desc:"My first Post.",
            share:'localhost:3000/jv41',
            background:"black",
            imgUrl:value[0].imgUrl,
            thumbnail:"https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        }, {
            id:'jv41',
            username : value[0].username,
            title : value[0].title,
            date : Date.now(),
            desc:"My first Post.is abd ",
            share:'localhost:3000/jv41',
            background:"black",
            imgUrl:value[0].imgUrl,
            thumbnail:"https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        }, {
            id:'jv41',
            username : value[0].username,
            title : value[0].title,
            date : Date.now(),
            desc:"My first Post.",
            share:'localhost:3000/jv41',
            background:"black",
            imgUrl:value[0].imgUrl,
            thumbnail:"https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        }, {
            id:'jv41',
            username : value[0].username,
            title : value[0].title,
            date : Date.now(),
            desc:"My first Post.",
            share:'localhost:3000/jv41',
            background:"black",
            imgUrl:value[0].imgUrl,
            thumbnail:"https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        }, {
            id:'jv41',
            username : value[0].username,
            title : value[0].title,
            date : Date.now(),
            desc:"My first Post.",
            share:'localhost:3000/jv41',
            background:"black",
            imgUrl:value[0].imgUrl,
            thumbnail:"https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        }
        ],

        {
            id:'jv41',
            username : value[0].username,
            title : 'Test Blog 1',
            date : Date.now(),
            content: 'The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.he new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.The new Tesla Cybertruck was unveiled last week and people have already placed a ton of orders. Tesla CEO Elon Musk updated on Twitter that the company has already received 200K orders so far.',
            likes: '1',
            share:'localhost:3000/jv41',
            background:"black",
            imgUrl:value[0].imgUrl,
        
        }
]
app.get('/userHeader',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");//fix for cors
    console.log('userHeader',req.query)
    // if(req.query.id === data[0].username)
    // {
    // res.send(data[0]);
    // }
    // else
    // {
    //     res.send({'username':'null'});
        
    // }
User.find({'username':req.query.id},{_id:0}, function(err, users) {
    if (err) throw err;
    console.log(users)
    res.send(users);
  });

})


app.get('/postHeader',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");//fix for cors
    console.log('postHeader',req.query)
    Post.find({'id':req.query.id},{_id:0,thumbnail:0,}, function(err, users) {
        if (err) throw err;

        User.find({'username':req.query.id},{_id:0}, function(err, userVal) {
        if (err) throw err;
        console.log(userVal);
        res.send(users);
        });
    });
})

app.post('/api/form-submit-url',function(req,res){
    console.log(req.body)
})

app.get('/userPosts',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");//fix for cors
    console.log('userPosts',req.query)
    if(req.query.id === data[0].username)
    {
    res.send(data[2]);
    }
})

app.get('/homedata',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");//fix for cors
    console.log('homedata')
    res.send(data[1]);
})





app.listen(port , ()=>{console.log(`Listening on Port ${port}`)})




// backend 
