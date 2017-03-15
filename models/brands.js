var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var brandSchema = new Schema({
  brandName: String 
});

var Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;