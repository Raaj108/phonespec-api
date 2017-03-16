var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var brandSchema = new Schema({
  brandName: {
    type: String,
    required: [true, 'What is the Brand?']
  }
});

var Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;