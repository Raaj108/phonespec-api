var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = require('./routes');
var port = process.env.PORT || 5000;
//this will let us get data from the request
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
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
