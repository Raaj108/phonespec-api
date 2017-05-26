var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var repliesSchema: new Schema({
  parent_id: Schema.ObjectId,
  author: String,
  posted: new Date(),
  comment: String
});

var commentsSchema = new Schema({
  phone_id: Schema.ObjectId,
  author: String,
  posted: new Date(),
  comment: String,
  replies: [repliesSchema]
});
var Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;
