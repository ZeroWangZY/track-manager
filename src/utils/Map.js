/**
 * Created by ZeroW on 2017/6/11.
 */
var coordtransform=require('coordtransform');

export function points2Bpoints(points) {
    var Bpoint = new Array();
    for(var i in points){
        //坐标系转换
        var wgs84togcj02=coordtransform.wgs84togcj02(points[i].Longtitude,
            points[i].Latitude);
        var gcj02tobd09=coordtransform.gcj02tobd09(wgs84togcj02[0],wgs84togcj02[1]);

        Bpoint[i]=new BMap.Point(gcj02tobd09[0],gcj02tobd09[1]);
    }
    return Bpoint;
}