var mongoose = require('mongoose');

var trans = function(doc, ret, options) {
    delete ret.id
    delete ret.__v;
}

var options = {toJSON:{transform: trans, virtuals: true}};

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CountrySchema = new mongoose.Schema({
    name: String,
    added_date: { type: Date, default: Date.now }
}, options);

module.exports.Country = mongoose.model('country', CountrySchema);