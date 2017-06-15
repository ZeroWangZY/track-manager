
var express = require('express');
var router = express.Router();
var orderDao = require('../dao/orderDao');
var path = require('path');

router.get('/getordercount', function(req, res, next) {
    orderDao.getOrderCount(req,res,next);
});


router.get('/getallorder', function(req, res, next) {
    orderDao.getAllOrder(req,res,next);
});

router.get("/getorderbyid", function(req, res, next) {
    orderDao.getOrderByID(req,res,next);
});

router.get('/getorderbytaxiid', function(req, res, next) {
    orderDao.getOrdersByTaxiID(req,res,next);
});


module.exports = router;
