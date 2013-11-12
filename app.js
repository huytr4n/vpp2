
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'),
	path = require('path'),
	app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Api
 */
var model = require('./app/model/model');
model(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
