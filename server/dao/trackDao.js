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
    } else {
        res.json(ret);
    }
};

module.exports = {
    test: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            console.log(param);
            connection.query('SELECT PositionX,PositionY FRom tracking where carID='+param.id, function(err, result) {
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
    }
};