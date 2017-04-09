var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//BATTERY SCHEMA
var batterySchema = new Schema({
  capacity: String,
  type: String,
  talktime: String,
  standBy: String,
  internetUse: Schema.Types.Mixed,
  playBack: Schema.Types.Mixed,
  wirelessCharging: Boolean
});

var design = new Schema({
  deviceType: String,
  platform: String,
  dimension: String,
  weight: String,
  colors: [String],
  materials: [String],
  additionalFeatures: [String],

})

//DISPLAY SCHEMA
var displaySchema = new Schema({
  size: String,
  pixelDensity: String,
  resolution: [String],
  technology: String,
  features: [String]
});


//CAMERA SCHEMA
var cameraSchema = new Schema({
  megaPixel: String,
  aperture: String,
  pixelSize: String,
  sensorSize: String,
  fieldOfView: String,
  features: [String],
  zoom: String,
  typeOfZoom: String,
  modes: [String],
  settings: [String],
  frontCamera: Schema.Types.Mixed,
  videoRecording: [String]
});

var hardwareSchema = new Schema({
  chipset: String,
  processor: String,
  graphicsProcessor: String,
  ram: String,
  storage: [String],
  expansion: [String]
});

var connectivitySchema = new Schema({
  bluetooth: String,
  gps: [String],
  usb: String,
  wifi: Schema.Types.Mixed,
  payment: String,
  other: Schema.Types.Mixed
});

var networkSchema = new Schema({
  gsm: [String],
  umts: [String],
  lteFDD: [Schema.Types.Mixed],
  lteTTD: [Schema.Types.Mixed],
  sim: String,
  data: [String]
});

var multiMediaSchema = new Schema({
  audio: [Schema.Types.Mixed],
  video: [Schema.Types.Mixed]
});

//PHONE SCHEMA (PARENT OF ALL OTHER SCHEMAS)
var phoneSchema = new Schema({
  phoneName: String,
  brandName: String,
  availability: [String],
  battery: batterySchema,
  display: displaySchema,
  camera: cameraSchema,
  hardware: hardwareSchema,
  connectivity: connectivitySchema,
  network: networkSchema,
  multimedia: multiMediaSchema
});
var Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;
