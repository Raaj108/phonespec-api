var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
  phone_id: {
    type: Schema.ObjectId,
    ref: 'Phone'
  },
  user: String,
  posted: Date,
  comment: String
});

var Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;
