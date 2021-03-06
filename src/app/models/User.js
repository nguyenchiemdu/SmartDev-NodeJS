const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { versionKey: false });


module.exports = mongoose.model('user', User)