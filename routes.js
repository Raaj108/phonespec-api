var express = require('express');
var router = express.Router();
var Phone = require('./models/phones');
var Brand = require('./models/brands');

//routes for our APIs
var router = express.Router();
//Middleware to use for all request
router.use((req, res, next) => {
  console.log("Something is happening");
  next();
});


//Our APIs
/*********************URL related to brand******************************/

//create a brand (accessed only by admin)
router.route('/admin/brand').post((req, res) => {
  console.log(JSON.stringify(req.body));
  var brand = new Brand({
    brandName: req.body.brandName,
    popularity: req.body.popularity
  })
  brand.save((err) => {
    if (err) res.send(err);
    res.status(201).json(brand);
  })
});

//get all brands
router.route('/brand').get((req, res) => {
  Brand.find((err, brands) => {
    if (err) res.send(err)
    res.json(brands)
  })
});

//Update brand info(post the brand's ID to update a specific brand's information)(accessed only by admin)
router.route('/admin/brand/:brandId').put((req, res) => {
  Brand.findById(req.params.brandId, (err, brand) => {
    if (err) res.send(err)
    brand.brandName = req.body.brandName;
    brand.save((err) => {
      if (err) res.send(err)
      res.json({
        message: 'Brand info updated!'
      })
    })
  })
});

/*********************URL related to phone******************************/

// create a new phone with post request(post the brand's name in URL and Phone name in the body of request to add new phone with brand)(accessed only by admin)
router.route('/admin/brand/:brand/phone').post((req, res) => {
  var phone = new Phone({
    phoneName: req.body.phoneName,
    brandName: req.params.brand,
    additionalFeatures: req.body.additionalFeatures,
    platform: req.body.platform,
    availability: req.body.availability,
    battery: {
      capacity: req.body.battery.capacity,
      type: req.body.battery.type,
      talktime: req.body.battery.talktime,
      standBy: req.body.battery.standBy,
      internetUse: req.body.battery.internetUse,
      playBack: req.body.battery.playBack,
      wirelessCharging: req.body.battery.wirelessCharging
    },
    display: {
      size: req.body.display.size,
      pixelDensity: req.body.display.pixelDensity,
      resolution: req.body.display.resolution,
      technology: req.body.display.technology,
      features: req.body.display.features
    },
    camera: {
      megaPixel: req.body.camera.megaPixel,
      aperture: req.body.camera.aperture,
      pixelSize: req.body.camera.pixelDensity,
      sensorSize: req.body.camera.sensorSize,
      fieldOfView: req.body.camera.fieldOfView,
      features: req.body.camera.features,
      zoom: req.body.camera.zoom,
      typeOfZoom: req.body.camera.typeOfZoom,
      modes: req.body.camera.modes,
      settings: req.body.camera.settings,
      frontCamera: req.body.camera.frontCamera,
      videoRecording: req.body.camera.videoRecording
    },
    hardware: {
      chipset: req.body.hardware.chipset,
      processor: req.body.hardware.processor,
      graphicsProcessor: req.body.hardware.graphicsProcessor,
      ram: req.body.hardware.ram,
      storage: req.body.hardware.storage,
      expansion: req.body.hardware.expansion
    },
    connectivity: {
      bluetooth: req.body.connectivity.bluetooth,
      gps: req.body.connectivity.gps,
      usb: req.body.connectivity.usb,
      wifi: req.body.connectivity.wifi,
      payment: req.body.connectivity.payment,
      other: req.body.connectivity.other
    },
    network: {
      gsm: req.body.network.gsm,
      umts: req.body.network.umts,
      lteFDD: req.body.network.lteFDD,
      lteTTD: req.body.network.lteTTD,
      sim: req.body.network.sim,
      data: req.body.network.data
    },
    multimedia: {
      audio: req.body.multimedia.audio,
      video: req.body.multimedia.video
    }
  })
  phone.save((err) => {
    if (err) {
      res.send();
    }
    res.status(201).json(phone);
  })
});

//get all the phones with a specific brand (post the brand's name in the url to get all phones of a specific brand)
router.route('/brand/:brand/phone').get((req, res) => {
  Phone.find({
    brandName: req.params.brand
  }, (err, phone) => {
    if (err) res.send(err)
    res.json(phone)
  })
});

//get a specific phone with a specific brand (post the brand's & phone's name in the url)
router.route('/brand/:brand/phone/:phone').get((req, res) => {
  Phone.find({
    phoneName: req.params.phone
  }, (err, phone) => {
    if (err) res.send(err)
    res.json(phone)
  })
});

//update the specific phone's specific information (post the brand's name, phone's Id in the url, and info. that you want to update in request body to update phone's info.)
router.route('/admin/brand/:brand/phone/:phoneId').put((req, res) => {
    Phone.findById(req.params.phoneId, (err, phone) => {
      if (err) res.send(err);
      for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
          phone[key] = req.body[key]; //update only those fields which are sent in the request body
        }
      }
      phone.save((err) => {
        if (err) res.send(err)
        res.json({
          message: 'Phone info updated!'
        })
      })
    })
  })
  // delete a specific phone with phone's ID(post the brand's name, phone's Id in the url)
  .delete((req, res) => {
    Phone.remove({
      _id: req.params.phoneId
    }, function (err, phone) {
      if (err) res.send(err);
      res.json({
        message: 'Successfully deleted'
      });
    });
  });


module.exports = router;
