const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const votesSchema = new Schema({
  option: {
    type: String
  },
  counter: {
    type: Number,
    required: true
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