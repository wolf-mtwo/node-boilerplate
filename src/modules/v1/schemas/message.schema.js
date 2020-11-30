const mongoose = require('mongoose');
const { v1 } = require('uuid');
let Schema = mongoose.Schema;

mongoose.model('Message', new Schema({
  _id: {
    type: String,
    default: () => { return v1(); }
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  }
}));
