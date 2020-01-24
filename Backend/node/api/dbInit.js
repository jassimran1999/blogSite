require('../dbConnection');

var User = require('../models/users');
var Post = require('../models/posts')

var init = new Post(
    {
        id:'jv41',
    title :'Test Blog 1',
    createdAt :Date.now(),
    content:'{"blocks":[{"key":"41b60","text":"Test post","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dc1vc","text":"based on backend data compiled over by draft.js","type":"header-three","depth":0,"inlineStyleRanges":[{"offset":0,"length":47,"style":"BOLD"},{"offset":0,"length":47,"style":"ITALIC"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    likes: '1',
    imgUrl:'https://cda.kaust.edu.sa/_layouts/KAUST_ResearchCenters_Template/images/DefaultPersonPhoto.png',
    thumbnail:'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    views:'1',
    userId:'jv4',
    }
);


// Post.find(
//     {userId:'jv4'},
//     function(err, doc) {
//         if (err) throw err;          
//         console.log(doc)
//         console.log("POST\n")}
// )

init.save()


// User.find({username:'jv4'},function(res,require){
//   console.log(require)
// })
