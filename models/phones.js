var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var phoneSchema = new Schema({
  name: String
});

var Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;