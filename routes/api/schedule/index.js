'use strict';

var express = require('express');
var controller = require('./schedule.controller');
var router = express.Router();

router.post('/', controller.save_appointment);

module.exports = router;
