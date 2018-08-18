const errors = require('http-errors');
const mongoose = require('mongoose');
const Destiny = require('../models/destiny.model');

module.exports.show = (req, res, next) => {

    Destiny.find()
        .then(places => {
            randomIndex= Math.floor(Math.random() * (places.length));
            let destiny = places[randomIndex];
            console.log(destiny);
            res.render('partials/destiny-detail', { destiny })
            
        })
        .catch(error => next(error))

    // Destiny.find({name: 'Mordor'})
    //     .then(destiny => {
    //         res.render('partials/destiny-detail', { destiny })
    //     })
}