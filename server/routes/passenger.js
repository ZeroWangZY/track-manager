var express = require('express');
var router = express.Router();
var passengerDao = require('../dao/passengerDao');

/* GET home page. */
router.get('/getpassengercount', function(req, res, next) {
     passengerDao.getPassengerCount(req,res,next);
});

router.get('/getallpassenger', function(req, res, next){
    passengerDao.getAllPassenger(req, res, next);
});

router.get('/getpassengerbyid', function(req, res, next){
    passengerDao.getPassengerByID(req, res, next);
});

router.post('/addpassenger', function(req, res, next){
    passengerDao.addPassenger(req, res, next);
});
router.post('/deletepassenger', function(req, res, next){
    passengerDao.deletePassenger(req, res, next);
});

module.exports = router;
