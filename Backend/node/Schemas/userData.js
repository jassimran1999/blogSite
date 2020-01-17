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
    username : String,
    title : String,
    date : Date,
    desc:String,
    share:String,
    background:String,
    imgUrl:String,
    thumbnail:String
  }]
});


let User = mongoose.model('User', userSchema);
module.exports = User;