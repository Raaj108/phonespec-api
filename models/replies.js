var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var repliesSchema = new Schema({
  parent_id: {
    type: Schema.ObjectId,
    ref: 'Comments'
  },
  author: String,
  posted: Date,
  comment: String
});

var Reply = mongoose.model('Reply', repliesSchema);
module.exports = Reply;
