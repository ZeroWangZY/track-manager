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
    getDriverCount: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            connection.query('SELECT count(*) as count from driver', function(err, result) {
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

    getAllDriver: function (req ,res, next) {
      pool.getConnection(function(err, connection) {
          connection.query('SELECT * from driver', function(err, result) {
              if(err){
                  console.log(err);
              }
              if(result) {
                  console.log('query success');
              }
              jsonWrite(res, result);
              connection.release();
          });
      });
    },

    addDriver: function(req, res, next){
      pool.getConnection(function(err, connection) {
          console.log(req.body);
          connection.query('insert into driver values ( '+ req.body.driverID +' , \''+req.body.name + '\' , \''+ req.body.phone +'\' )', function(err, result) {
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

    getDriverByID: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            console.log('param is');
            console.log(param);
            connection.query('SELECT * from driver where driverID='+ param.id , function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    console.log(result);
                    console.log('query success');
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },

    getDriversByName: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            console.log('param is');
            console.log(param);
            connection.query('SELECT * from driver where name like \'%'+ param.name+'%\'' , function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    console.log(result);
                    console.log('query success');
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    getPointsByID: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            console.log('param is');
            console.log(param);
            connection.query('call getpointsbydriver('+param.id+')' , function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    console.log(result);
                    console.log('query success');
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    }
};
