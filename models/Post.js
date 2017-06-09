var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  text: String,
  date: String
});

module.exports = mongoose.model('Post', postSchema);