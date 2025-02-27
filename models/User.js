const mongoose = require('mongoose');

const userSchhema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  shippingAddress: {
    address: { type: String, default: '' },
    city: { type: String, default: '' },
    isEmpty: { type: Boolean, default: true }
  }
}, { timestamps: true });


const User = mongoose.model('User', userSchhema);

module.exports = User;