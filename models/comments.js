var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
  phone: {
    type: Schema.ObjectId,
    ref: 'Phone'
  },
  author: String,
  posted: Date,
  comment: String
});

var Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;
