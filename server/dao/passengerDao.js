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
    getPassengerCount: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            connection.query('SELECT count(*) as count from passenger', function(err, result) {
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

    getAllPassenger: function (req ,res, next) {
      pool.getConnection(function(err, connection) {
          connection.query('SELECT * from passenger', function(err, result) {
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

    getPassengerByID: function (req ,res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            console.log('param is');
            console.log(param);
            connection.query('SELECT * from passenger where passengerid='+ param.id, function(err, result) {
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

    addPassenger: function(req, res, next){
      pool.getConnection(function(err, connection) {
          console.log(req.body);
          connection.query('insert into passenger values ( '+ req.body.passengerid +' , \''+req.body.passengername + '\' , \''+ req.body.phone +'\' )', function(err, result) {
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
    deletePassenger: function(req, res, next){
      pool.getConnection(function(err, connection) {
          console.log(req.body);
          connection.query('delete from passenger where passengerid=' + req.body.id, function(err, result) {
              if(err){
                  console.log(err);
              }
              if(result) {
                  console.log(result);
                  console.log('delete success');
              }
              jsonWrite(res, result);
              connection.release();
          });
      });
    }
};
