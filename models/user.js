var mongoose = require('mongoose');

var trans = function(doc, ret, options) {
    delete ret.id
    delete ret.__v;
}

var options = {toJSON:{transform: trans, virtuals: true}};

var UserSchema = new mongoose.Schema({
	email: String,
	password: String,
    added_date: { type: Date, default: Date.now }
}, options);

module.exports.User = mongoose.model('user', UserSchema);