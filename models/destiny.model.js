const mongoose = require('mongoose');

module.exports = mongoose.model('Place', new mongoose.Schema({
    image: String,
    name: String,
    distance: String,
    journey: String

}));