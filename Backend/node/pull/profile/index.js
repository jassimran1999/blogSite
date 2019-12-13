var express = require('express')
var app = express()
var port = 5000

app.get('/queryParams',function(req,res){
    console.log(req.query)
    res.send(req.query);
})

app.listen(port , ()=>{console.log(`Listening on Port ${port}`)})