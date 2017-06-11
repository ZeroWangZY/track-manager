var express = require('express');
var router = express.Router();
var trackDao = require('../dao/trackDao');
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
     res.type('html');
     res.sendfile(path.join(__dirname, '../../public','index.html'));
});



module.exports = router;
