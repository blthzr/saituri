var mongoose = require('mongoose');
var db = mongoose.connection;

exports.index = function(req, res) {
	res.render('index', { active: 'home' });
};

exports.about = function(req, res) {
	res.render('about', { active: 'about' });
};

exports.contact = function(req, res) {
	res.render('contact', { active: 'contact' });
};
