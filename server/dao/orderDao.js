
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
    getOrderCount: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            connection.query('SELECT count(*) as count from pro1.order', function(err, result) {
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

    getAllOrder: function (req ,res, next) {
      pool.getConnection(function(err, connection) {
          connection.query('SELECT * from pro1.order', function(err, result) {
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


    getOrderByID: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            console.log('param is');
            console.log(param);
            connection.query('SELECT * from pro1.order where Orderid='+ param.id , function (err, result) {
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

    getOrdersByTaxiID: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            console.log('param is');
            console.log(param);
            connection.query('SELECT * from pro1.order where Taxiid like \'%'+ param.id+'%\'' , function (err, result) {
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
