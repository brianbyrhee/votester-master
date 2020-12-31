const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const optionSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"
  },
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
})

const Option = mongoose.model('Option', optionSchema);

module.exports = Option;