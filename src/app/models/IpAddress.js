const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const IpAddress = new Schema({
  ip: { type: String, default: '' },
}, { versionKey: false });


module.exports = mongoose.model('ip_address', IpAddress)