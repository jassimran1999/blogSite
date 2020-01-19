let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  description: String,
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, unique: true },
  createdAt: Date,
  userPhoto: String,
  follows: Number,
  following: Number,
  password: String,
  postArr: [{
    postId:String,
  }],
  followed:[{
    userId:String,
    }],
  following:[{
    userId:String,
  }],
  postsLiked:[{
    postId:String,
  }],
  currentlyReading:[{
    postId:String,
    percentRead:Number,
  }],
});


let User = mongoose.model('User', userSchema);
module.exports = User;