
/**
 * Module dependencies.
 * Modules from npm package manager
 */

var express = require('express');

/**
 * Module dependencies.
 * Modules and components created
 */
var routes = require('./routes');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// set globally viable data
app.set('title', 'Saituri'); // translate this?

var mongoose = require('mongoose');
var db = mongoose.connection;

db.once('open', function() {
  console.log("Connected to mongodb");
});

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
