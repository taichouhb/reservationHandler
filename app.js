// The necessary imports required for the web app
var bodyParser = require('body-parser');
var express = require('express');
var flash = require('connect-flash');
var handlebars = require('express-handlebars');
var rSDK = require('robin-js-sdk');

//var db = require('./lib/database.js'); // Database library

var app = express();

// Set the port to 3000
app.set('port', process.env.PORT || 3000);

var view = handlebars.create({ defaultLayout: 'main' });
app.engine('handlebars', view.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(flash());
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var RobinTokin = 'PdYyTDkdzAbVIILb2wskbqXtYfR5bpZxbX7waYTiXJFPj24cfqIIPJfLQGqjalpBYKFQTZn7S1BK5zD6WUpK9qj3sXGMxJ3lrhbIgtpIdi1g0pNUMCVKmGidkb9wXQTo';
////// Start User-Defined Routes
var robin = new rSDK(RobinTokin);
var reserves = [];
// Root directory that redirects to the home page
app.get('/', (req, res) => {
  res.redirect('users');
});

// Home page
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

app.get('/makeReservation', (req, res) => {
  res.render('makeReservation', {
    reservations : reserves
  });
});



app.post('/newReservation', (req, res) =>{
  var form = req.body;
  var firstname = form.firstname;
  var email = form.email;
  var tup = {"name" : firstname, "email" : email};
 
  for (i in reserves){
    if(i[1] == email){

      res.render('makeReservation', {
        reservations : reserves,
        message : "Your Account has already Reserved a spot, no reservations made!"
      });
      
     }
  }
  reserves.push(tup);
  ///res.redirect('/makeReservation');
  res.render(
    'makeReservation', {
      reservations : reserves,
      message : "Reservation Has been Made succefully"
    });

});



app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

////// End Error Middleware

// Start the express app on port 3000
app.listen(app.get('port'), () => {
  console.log('Express application started on http://localhost:' +
              app.get('port') + '; press Ctrl-C to terminate');
});
