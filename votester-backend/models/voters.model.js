const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const votesSchema = new Schema({
  option: {
    type: String,
    // required: true,
    // unique: true,
    // trim: true,
    // minlength: 3
  },
  votes: [{
    name: {
      type: String, 
      required: false
    }, 
    date: {
    type: Date, 
    required: false,
    default: Date.now
    }
  }]
}, {
  timestamps: true,
})

const Votes = mongoose.model('Votes', votesSchema);

module.exports = Votes;