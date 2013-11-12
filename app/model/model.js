function doModel (app) {
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://admin:root@ds053828.mongolab.com:53828/vp');

	var product = require('./product');
	product(mongoose, app);
}

module.exports = doModel;