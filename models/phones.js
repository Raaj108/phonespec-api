var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//BATTERY SCHEMA
var batterySchema = new Schema({
  capacity: Number,
  type: String,
  wirelessCharging: Boolean
});


//DISPLAY SCHEMA
var displaySchema = new Schema({
  size: Number,
  pixelDensity: Number,
  resolution: [Number],
  technology: String,
  features: [String]
});


//CAMERA SCHEMA
var frontCameraSchema = new Schema({
  mp: Number,
  aperture: Number,
  pixelSize: Number,
  sensorSize: [Number],
  fieldOfView: Number,
  features: [String]

});

var rearCameraSchema = new Schema({
  mp: Number,
  aperture: Number,
  pixelSize: Number,
  sensorSize: [Number],
  fieldOfView: Number,
  features: [String],
  zoom: Number,
  typeOfZoom: String
});



var cameraSchema = new Schema({
  frontCamera: frontCameraSchema,
  rearCamera: rearCameraSchema,
  both:[String],
  videoRecording:[String]
});



//PHONE SCHEMA (PARENT OF ALL OTHER SCHEMAS)
var phoneSchema = new Schema({
  phoneName: String,
  brandName: String,
  additionalFeatures: [String],
  platform: String,
  availability: [String],
  battery: batterySchema,
  display: displaySchema,
  camera: cameraSchema
});
var Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;