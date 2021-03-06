const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  comments: Array,
  posts: [
    { type: Schema.Types.ObjectId, ref: "Post" }
  ],
  voted: [
    { type: Schema.Types.ObjectId, ref: "Post" }
  ]
},
 {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
