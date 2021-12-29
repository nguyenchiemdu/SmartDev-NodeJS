const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TopCategory = new Schema({
  name: { type: String, default: '' },
  thumbnail: { type: String, default: '' }
}, { versionKey: false });


module.exports = mongoose.model('top_category', TopCategory)