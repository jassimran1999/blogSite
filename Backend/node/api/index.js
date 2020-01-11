var express = require('../node_modules/express')
var app = express()
var port = 5000
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
        postArr:["jv41"],
    },
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
]
app.get('/queryParams',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");//fix for cors
    console.log('queryParams',req.query)
    if(req.query.id === data[0].username)
    {
    res.send(data[0]);
    }
    else
    {
        res.send({'username':'null'});
        
    }
})

app.get('/homedata',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");//fix for cors
    console.log('homedata')
    res.send(data[1]);
})
app.listen(port , ()=>{console.log(`Listening on Port ${port}`)})

// backend 
