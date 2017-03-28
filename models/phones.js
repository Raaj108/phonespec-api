var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var phoneSchema = new Schema({
    phoneName: String
    , brandName: String
    , additionalFeatures: [String]
    , platform: String
    , availability: [String]
    , "battery": {}
});
var Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;