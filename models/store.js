var mongoose = require('mongoose');

var trans = function(doc, ret, options) {
    delete ret.id
    delete ret.__v;
}

var options = {toJSON:{transform: trans, virtuals: true}};

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var StoreSchema = new mongoose.Schema({
    name: String,
    brand: ObjectId,
	city: ObjectId,
	address: String,
	zipCode: number
    added_date: { type: Date, default: Date.now }
}, options);

module.exports.Store = mongoose.model('store', StoreSchema);
