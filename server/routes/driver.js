var express = require('express');
var router = express.Router();
var driverDao = require('../dao/driverDao');


/* GET home page. */
router.get('/getdrivercount', function(req, res, next) {
     driverDao.getDriverCount(req,res,next);
});

router.get('/getalldriver', function(req, res, next){
    driverDao.getAllDriver(req, res, next);
});

router.get('/getdriversbyname', function(req, res, next){
    driverDao.getDriversByName(req, res, next);
});

router.get('/getdriverbyid', function(req, res, next){
    driverDao.getDriverByID(req, res, next);
});
router.post('/adddriver', function(req, res, next){
    driverDao.addDriver(req, res, next);
});
router.get('/getpointsbyid', function(req, res, next){
    driverDao.getPointsByID(req, res, next);
});

module.exports = router;
