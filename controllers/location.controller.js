const errors = require('http-errors');
const mongoose = require('mongoose');
const Destiny = require('../models/destiny.model');

module.exports.show = (req, res, next) => {

    res.render('../views/partials/location-details.hbs');
    
}