const express = require('express');
const router = express.Router();
const model = require('../db/models')
const meetup = model.Meetup
const Promise = require('bluebird')

/* GET home page. */


router.use('/meetups', require('./meetups'));
    

module.exports = router;