var express = require('express');
var fs = require('fs');
var multer = require('multer');

var db = require('../lib/database.js'); // Database library
var online = require('../lib/online').online; // List of online users
var sessionCheck = require('../lib/sessionCheck.js') // Session checking library
var user = require('../lib/user.js'); // User library

var router = express.Router(); // "Router" to separate particular points

// Multer paramters
var uploading = multer({
  dest: './public/imgs/users/',
  limits: {files: 1}
});

////// Start GET Requests


router.get('/index', (req, res) => {
  res.render('');
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