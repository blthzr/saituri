var mongoose = require('mongoose');

var trans = function(doc, ret, options) {
    delete ret.id
    delete ret.__v;
}

var options = {toJSON:{transform: trans, virtuals: true}};

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CitySchema = new mongoose.Schema({
    name: String,
    country: ObjectId,
    added_date: { type: Date, default: Date.now }
}, options);

module.exports.City = mongoose.model('city', CitySchema);