const mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.model('Article', new Schema({
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
