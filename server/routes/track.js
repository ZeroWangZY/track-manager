/**
 * Created by ZeroW on 2017/6/10.
 */
var express = require('express');
var router = express.Router();
var trackDao = require('../dao/trackDao');
var path = require('path');

router.get('/getpointsbyid', function(req, res, next) {
    trackDao.test(req,res,next);
});

module.exports = router;