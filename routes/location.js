const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location.controller');

router.get('/locationDetail', locationController.show)

module.exports = router;