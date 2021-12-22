const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Category = new Schema({
  name: {type : String, default : ''},
});


module.exports = mongoose.model('list_category',Category)