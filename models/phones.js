var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//BASIC INFORMATION SCHEMA
var basicInfoSchema = new Schema({
  phoneName: String,
  brandName: String,
  releaseDate: String,
  description: String,
  features: [String]
})
//DESIGN SCHEMA
var designSchema = new Schema({
  operatingSystem: String,  
  dimension: String,
  weight: String,
  materials: [String],
  colors: [String],
  //features: [String],
});
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
  pixelSize: String,
  modes: [String],
  aperture: String,
  sensorSize: String,  
  zoom: String, 
  features: [String],
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
//HARDWARE SCHEMA
var hardwareSchema = new Schema({
  chipset: String,
  processor: String,
  ram: String,
  graphicsProcessor: String,
  internalStorage: [String],
  storageExpansion: [String],
  sensors: [String]
});
//SOUND SCHEMA
var soundSchema = new Schema({
  speaker: String,
  microphone: String,
  headsetJack: String,
  soundType: [String],
});
//CONNECTIVITY SCHEMA
var connectivitySchema = new Schema({
  wifi: Schema.Types.Mixed,
  locationServices: [String],
  bluetooth: String,
  nfc: String,
  usb: String,
  others: Schema.Types.Mixed
});
//NETWORK SCHEMA
var networkSchema = new Schema({
  sim: String,
  cdma: [String],
  gsm: [String],
  lte: [Schema.Types.Mixed],
  umts: [String],
  others: [String]
});
//PHONE SCHEMA (PARENT OF ALL OTHER SCHEMAS)
var phoneSchema = new Schema({
  basicInfo: basicInfoSchema,
  design: designSchema,
  display: displaySchema,
  camera: cameraSchema,
  battery: batterySchema,
  hardware: hardwareSchema,
  sound: soundSchema,
  connectivity: connectivitySchema,
  network: networkSchema
});
var Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;
