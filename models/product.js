var mongoose = require('mongoose');

var trans = function(doc, ret, options) {
    delete ret.id
    delete ret.__v;
}

var options = {toJSON:{transform: trans, virtuals: true}};

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ProductSchema = new mongoose.Schema({
	name: String,
	weight: number,
	price: number,
    date: { type: Date, default: Date.now },
    reporter: ObjectId,
    store: ObjectId
}, options);

module.exports.Product = mongoose.model('product', ProductSchema);
