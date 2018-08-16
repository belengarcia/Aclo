const errors = require('http-errors');
const mongoose = require('mongoose');
const Destiny = require('../models/destiny.model');

module.exports.show = (req, res, next) => {
    Destiny.find({name: 'Mordor'})
        .then(destiny => {
            console.log(destiny)
            res.render('partials/destiny-detail', { destiny })
        })
}