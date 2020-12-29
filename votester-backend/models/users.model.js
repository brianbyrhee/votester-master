const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  email: {type: String, required: false},
  date: {type: Date, required: false, default: Date.now}
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;