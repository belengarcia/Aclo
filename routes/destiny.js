const express = require('express');
const router = express.Router();
const destinyController = require('../controllers/destiny.controller');

router.get('/destinyDetail', destinyController.show)


module.exports = router;