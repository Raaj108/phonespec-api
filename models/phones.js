var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var phoneSchema = new Schema({
  phoneName: String,
  brandName: String
});

var Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;