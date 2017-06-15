/**
 * Created by ZeroW on 2017/6/3.
 */
var mysql = require('mysql');
var $conf = require('../conf/db');
var pool  = mysql.createPool($conf.mysql);

var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else if(ret.length == 0) {
        res.json({
            code:'1',
            msg:'not found'
        });
    } else {
        res.json(ret)
    }
};


module.exports = {
    test: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            console.log('param is');
            console.log(param);
            connection.query('SELECT Longtitude,Latitude FRom minitrack where Taxiid='+param.id+' order by Recetime', function(err, result) {
                if(err){
                    console.log(err);
                }
                if(result) {
                    console.log(result);
                    console.log('query success');
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
<<<<<<< HEAD

    taxiIDtoDriver: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            console.log('param is');
            console.log(param);
            connection.query('SELECT * FRom driver where driverID in (SELECT distinct driverID from taxi where Taxiid=' + param.id + ')', function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
=======
    getdistancebyorder: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            console.log('param is');
            console.log(param);
            connection.query('call getdistancebyorder('+param.id+',@a,@b)', function(err, result) {
                if(err){
                    console.log(err);
                }
                if(result) {
                    console.log(result);
                    console.log('query success');
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    getpricebyorder: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            console.log('param is');
            console.log(param);
            connection.query('call getpricebyorder('+param.id+')', function(err, result) {
                if(err){
                    console.log(err);
                }
                if(result) {
>>>>>>> bc341c3e9af4febeef13ce795cabb74e807bb8b2
                    console.log(result);
                    console.log('query success');
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    }

<<<<<<< HEAD


};

=======
};
>>>>>>> bc341c3e9af4febeef13ce795cabb74e807bb8b2
