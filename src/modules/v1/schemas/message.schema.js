const mongoose = require('mongoose');
const { v1 } = require('uuid');
let Schema = mongoose.Schema;

mongoose.model('Message', new Schema({
  _id: {
    type: String,
    default: () => { return v1(); }
  },
  device_id: {
    type: String,
    required: true,
    trim: true
  },
  hostname: {
    type: String,
    required: true,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  }
}));
