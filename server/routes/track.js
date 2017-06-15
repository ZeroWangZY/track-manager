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


router.get('/getdriverbytaxiID', function(req, res, next) {
    trackDao.taxiIDtoDriver(req,res,next);
});

router.get('/getpointsbyorder', function(req, res, next) {
    trackDao.getpointsbyorder(req,res,next);
});

router.get('/getdistancebyorder', function(req, res, next) {
    trackDao.getdistancebyorder(req,res,next);
});
router.get('/getpricebyorder', function(req, res, next) {
    trackDao.getpricebyorder(req,res,next);
});
router.get('/gethotpoints', function(req, res, next) {
    trackDao.gethotpoints(req,res,next);
});
module.exports = router;
