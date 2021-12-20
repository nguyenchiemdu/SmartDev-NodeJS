const mongoose = require('mongoose');

async function connect (){
    try {
        await mongoose.connect('mongodb://localhost:27017/smart_dev');
        console.log('connect succeeded');
    } catch (err) {
        console.log(err);
    }
}

module.exports = { connect}