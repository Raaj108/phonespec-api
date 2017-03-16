var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var Phone = require('./models/phones');
var Brand = require('./models/brands');
var port = process.env.PORT || 3000;
//this will let us get data from the request
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//open a connection to database
mongoose.connect('mongodb://raj:password@ds129260.mlab.com:29260/restfulcrud');
//test database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, " connection error"));
db.on('open', () => {
  console.log("Connected to database");
  app.listen(port); //if connected to db, then start listening on given port
  console.log("listening on " + port);
});

//routes for our APIs
var router = express.Router();
//Middleware to use for all request
router.use((req, res, next) => {
  console.log("Something is happening");
  next();
});

//Our APIs
/*********************URL related to brand******************************/
router.route('/admin/brand')

//create a brand (accessed only by admin)
.post((req, res) => {
  console.log(JSON.stringify(req.body));
  var brand = new Brand({
    brandName: req.body.brandName
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
router.route('/admin/brand/:brandId')
  .put((req, res) => {
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
  })

/*********************URL related to phone******************************/
//accessed at  http://localhost:8080/api/phones
router.route('/admin/brand/:brand/phone')
  // create a new phone with post request(post the brand's name in URL and Phone name in the body of request to add new phone with brand)(accessed only by admin)
  .post((req, res) => {
    console.log(JSON.stringify(req.body));
    var phone = new Phone({
      phoneName: req.body.phoneName,
      brandName: req.params.brand
    });
    phone.save((err) => {
      if (err) res.send(err);
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
})

router.route('/brand/:brand/phone/:phone').get((req, res) => {
  Phone.find({
    phoneName: req.params.phone
  }, (err, phone) => {
    if (err) res.send(err)
    res.json(phone)
  })
});

//update the specific phone's specific information (post the brand's name, phone's Id in the url, and info. that you want to update in request body to update phone's info.)
router.route('/admin/brand/:brand/phone/:phoneId')
  .put((req, res) => {
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
      if (err)
        res.send(err);
      res.json({
        message: 'Successfully deleted'
      });
    });
  });

app.use('/api', router);