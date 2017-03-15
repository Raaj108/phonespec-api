var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var phoneSchema = new Schema({
  brand: String,  
  model: [{}]
});

var Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;