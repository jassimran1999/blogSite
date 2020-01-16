let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  description: String,
  createdAt: Date,
  userPhoto: String,
  follow1: Number,
  following1: Number,
  postArr: [{
      id:String,
      postDate: Date,
      descPost: String,
      thumbnail: String,
      content: String,
  }]
});


let User = mongoose.model('User', userSchema);
module.exports = User;