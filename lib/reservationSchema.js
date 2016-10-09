var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://admin:admin@ds053196.mlab.com:53196/robin_reservation');

var reservationSchema = new Schema({
	name: String, 
	email : String
});

module.exports = reservationSchema;