var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var specSchema = new Schema({
    phoneName: String
    , brandName: String
    , additionalFeatures: [String]
    , platform: String
    , availability: [String]
    , "battery": {}
});
var Spec = mongoose.model('Spec', specSchema);
module.exports = Spec;