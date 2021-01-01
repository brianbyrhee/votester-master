const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const optionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  counter: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

const Option = mongoose.model('Option', optionSchema);

module.exports = Option;