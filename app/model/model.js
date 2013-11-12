function doModel (app) {
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/product');

	var product = require('./product');
	product(mongoose, app);
}

module.exports = doModel;