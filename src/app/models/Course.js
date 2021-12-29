const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Array, required: true },
  thumbnail: { type: String, required: true },
  what_you_will_learn: { type: String, required: true },
  original_price: { type: String, required: true },
  coupon_code: { type: String, required: true },
  last_updated: { type: String, required: true },
}, { versionKey: false });


module.exports = mongoose.model('course', Course)