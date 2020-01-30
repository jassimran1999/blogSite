require('../dbConnection');

const User = require('../models/users');
const Post = require('../models/posts');

const init = new User(
  {
    username: 'jv4',
    password: 'admin',
    name: 'JV',
    description: 'Hi I am J.V ',
    email: 'jvirdi4@gmail.com',
    phoneNumber: '1234567890',
    createdAt: Date.now(),
    userPhoto: 'https://cda.kaust.edu.sa/_layouts/KAUST_ResearchCenters_Template/images/DefaultPersonPhoto.png',
    followers: '10',
    following: '1',
    postArr: [{
      postId: 'jv41',
    }],
  },
);


// Post.find(
//     {userId:'jv4'},
//     function(err, doc) {
//         if (err) throw err;
//         console.log(doc)
//         console.log("POST\n")}
// )

// init.save()


User.find({ username: 'jv4' }, (res, require) => {
  console.log(require);
});
