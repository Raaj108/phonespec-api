var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var designSchema = new Schema({
  operatingSystem: String,
  deviceType: String,
  dimension: String,
  weight: String,
  materials: [String],
  colors: [String],
  additionalFeatures: [String],
})
//DISPLAY SCHEMA
var displaySchema = new Schema({
  resolution: [String],
  size: String,
  pixelDensity: String,
  technology: String,
  features: [String]
});
//CAMERA SCHEMA
var cameraSchema = new Schema({
  megaPixel: String,
  modes: [String],
  pixelSize: String,
  aperture: String,
  sensorSize: String,
  zoom: String,
  typeOfZoom: String,
  features: [String],
  settings: [String],
  frontCamera: Schema.Types.Mixed,
  videoRecording: [String]
});
//BATTERY SCHEMA
var batterySchema = new Schema({
  capacity: String,
  type: String,
  internetUse: Schema.Types.Mixed,
  talktime: String,
  standBy: String,
  playBack: Schema.Types.Mixed,
  wirelessCharging: Boolean
});
var hardwareSchema = new Schema({
  processor: String,
  ram: String,
  storage: [String],
  graphicsProcessor: String,
  expansion: [String],
  chipset: String
});
var multiMediaSchema = new Schema({
  audio: [Schema.Types.Mixed],
  video: [Schema.Types.Mixed]
});
var connectivitySchema = new Schema({
  wifi: Schema.Types.Mixed,
  gps: [String],
  bluetooth: String,
  payment: String,
  usb: String,
  other: Schema.Types.Mixed
});
var networkSchema = new Schema({
  sim: String,
  data: [String],
  gsm: [String],
  lteFDD: [Schema.Types.Mixed],
  lteTTD: [Schema.Types.Mixed],
  umts: [String]
});
//PHONE SCHEMA (PARENT OF ALL OTHER SCHEMAS)
var phoneSchema = new Schema({
  phoneName: String,
  brandName: String,
  additionalFeatures: [String],
  availability: [String],
  description: String,
  design: designSchema,
  display: displaySchema,
  camera: cameraSchema,
  battery: batterySchema,
  hardware: hardwareSchema,
  multimedia: multiMediaSchema,
  connectivity: connectivitySchema,
  network: networkSchema
});
var Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;
