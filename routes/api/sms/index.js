'use strict';

var express = require('express');
var controller = require('./sms.controller');
var router = express.Router();

router.post('/webhook', controller.save_appointment);

module.exports = router;
