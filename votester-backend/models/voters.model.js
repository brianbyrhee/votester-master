const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const votesSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Option"
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