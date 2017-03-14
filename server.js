var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

//this will let us get data from the request
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

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
//create new schema

var phoneSchema = mongoose.Schema({
  "name": String,
  "description": String
});

var Phone = mongoose.model('Phone', phoneSchema);


//routes for our APIs
var router = express.Router();
app.use('/api', router);

//Middleware to use for all request
router.use((req, res, next) => {
  console.log("Something is happening");
  next();
});

//Our APIs

//accessed at  http://localhost:8080/api/phones
router.route('/phones')
  // create a new phone with post request
  .post((req, res) => {
    var phone = new Phone(); //create new instance of phone model
    phone.name = req.body.name;
    phone.description = req.body.description;

    phone.save((err) => {
      if (err) res.send(err);

      res.json({
        message: 'New Phone Created'
      });
    })
  })
  //get all phones
  .get((req, res) => {
    Phone.find((err, phones) => {
      if (err) res.send(err)

      res.json(phones)
    })
  });


//accessed at  http://localhost:8080/api/phones/:phoneId to get , update or delete phone using ID
router.route('/phones/:phoneId')
  //get phone using ID
  .get((req, res) => {
    Phone.findById(req.params.phoneId, (err, phone) => {
      if (err) res.send(err)

      res.json(phone)
    })
  })
  .put((req, res) => {
    Phone.findById(req.params.phoneId, (err, phone) => {
      if (err) res.send(err)

      phone.name = req.body.name; // update phone info

      phone.save((err) => {
        if (err) res.send(err)
        res.json({
          message: 'Phone info updated!'
        })
      })
    })
  })
  .delete(function (req, res) {
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