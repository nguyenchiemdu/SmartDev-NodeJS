const mongoose = require('mongoose');
const uri = "mongodb+srv://du_2001:chiemdu552001@cluster0.syygc.mongodb.net/smart_dev?retryWrites=true&w=majority";
async function connect (){
    try {
        await mongoose.connect(uri);
        console.log('connect to db succeeded');
    } catch (err) {
        console.log(err);
    }
}

module.exports = { connect}