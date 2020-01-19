var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogDb')

var User = require('../Schemas/userData');

var init = new User(
    {
        name: "JV",
  username: "jv4",
  password: "blogbackend",
  description: 'hi my name is J V. I am a human being \n work hard play hard.',
  createdAt: Date.now(),
  userPhoto: "https://cda.kaust.edu.sa/_layouts/KAUST_ResearchCenters_Template/images/DefaultPersonPhoto.png",
  follow1: '132',
  following1: '156',
  postArr: [{
      username : "jv4",
      title : "My first post.",
      share:"https://localhost/jv41" ,
      postDate: Date.now(),
      descPost: "My first Post.",
      thumbnail: "https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  }]
    }
)

User.find(
    {username:'jv4'},
    function(err, doc) {
        if (err) throw err;
        console.log(doc)
        console.log("POST\n" + doc[0]['postArr']);}
)