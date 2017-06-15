var express = require('express');
var router = express.Router();
var taxiDao = require('../dao/taxiDao');


/* GET home page. */
router.get('/gettaxicount', function(req, res, next) {
    taxiDao.getTaxiCount(req,res,next);
});

router.get('/getalltaxi', function(req, res, next){
    taxiDao.getAllTaxi(req, res, next);
});

router.get('/gettaxibyID', function(req, res, next){
    taxiDao.getTaxiByID(req, res, next);
});


router.post('/addtaxi', function(req, res, next){
    taxiDao.addTaxi(req, res, next);
});



module.exports = router;
