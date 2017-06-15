/**
 * Created by ZeroW on 2017/6/10.
 */
import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');
var coordtransform=require('coordtransform');
import {points2Bpoints} from '../utils/Map';

class Map extends React.Component{

    showHeat(){
        var pointArray = points2Bpoints(this.props.points);
        console.log(pointArray);

        var map = new BMap.Map(this.refs.map);
        map.centerAndZoom(pointArray[0], 11);
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.enableScrollWheelZoom(true);
        var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
      	map.addOverlay(heatmapOverlay);
      	heatmapOverlay.setDataSet({data:pointArray,max:100});
        heatmapOverlay.show();
    }
    showPolyline=function(){

        var pointArray = points2Bpoints(this.props.points);

        var polyline = new BMap.Polyline(pointArray,
            {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5}
        );
        var map = new BMap.Map(this.refs.map);
        map.addOverlay(polyline);
        map.centerAndZoom(pointArray[0], 15);
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.enableScrollWheelZoom(true);
    }


    showMap(){
        var map = new BMap.Map(this.refs.map);    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    }
    componentDidMount(){
        this.showMap();

    }


    render(){
        if(this.props.points[0]){
            if(this.props.type=='line'){
              this.showPolyline();
            }else if(this.props.type=='heat'){
              this.showHeat();
            }
        }



        return (

                <div style={{ background: '#fff', padding: 24, minHeight: 500 }}  ref="map">
                </div>
        )
    }
}

export  default  Map;
