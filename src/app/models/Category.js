const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Category = new Schema({
  name: { type: String, default: '' },
}, { versionKey: false });


module.exports = mongoose.model('category', Category)