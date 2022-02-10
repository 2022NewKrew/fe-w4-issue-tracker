const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
