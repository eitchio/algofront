var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/algorithms.html'));

});


module.exports = router;



