var express = require('../node_modules/express')
var app = express()
var port = 5000
const data = {
    username : 'jv4',
    name : 'J. V',
    description : 'hi my name is J V. I am a human being \n work hard play hard.',
    follows: '1000',
    share:'localhost:3000/jv4',
    userPhoto: "https://cda.kaust.edu.sa/_layouts/KAUST_ResearchCenters_Template/images/DefaultPersonPhoto.png",
    follow1: '132',
    following1: '156',
    postArr:["jv41"],
}
app.get('/queryParams',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");//fix for cors
    console.log(req.query)
    if(req.query.id === data.username)
    {
    res.send(data);
    }
    else
    {
        res.send({'username':'null'});
        
    }
})

app.listen(port , ()=>{console.log(`Listening on Port ${port}`)})

// backend 
