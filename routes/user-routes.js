var express = require('express');
var fs = require('fs');
var multer = require('multer');
var rSDK = require('robin-js-sdk');
var db = require('../lib/database.js'); // Database library
var router = express.Router(); // "Router" to separate particular points

// Multer paramters
var uploading = multer({
  dest: './public/imgs/users/',
  limits: {files: 1}
});

var RobinTokin = 'PdYyTDkdzAbVIILb2wskbqXtYfR5bpZxbX7waYTiXJFPj24cfqIIPJfLQGqjalpBYKFQTZn7S1BK5zD6WUpK9qj3sXGMxJ3lrhbIgtpIdi1g0pNUMCVKmGidkb9wXQTo';
////// Start User-Defined Routes
var robin = new rSDK(RobinTokin);
////// Start GET Requests



app.get('/users', (req, res) => {
  //pull in from API from Robin 

  robin.api.spaces.presence.get(16008).then(function (response) {
    var users = response.getData();
    res.render('users', {
      user : users,
      message : "Customers Present"
    });
  });

});

app.get('makeReservations' , (req, res) => {
  
});

// Registration page
// router.get('/registration', (req, res) => {
//   res.render('registration', {
//     title: 'Registration',
//     message: req.flash('registration') || ''
//   });
// });



////// End GET Requests

////// Start POST Requests


module.exports = router;
