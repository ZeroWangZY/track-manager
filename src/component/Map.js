/**
 * Created by ZeroW on 2017/6/10.
 */
import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import {address} from '../config/config';
let i = 0;
class Map extends React.Component{
    constructor(){
        super();
    }
    getInitialState(){
        return{
            i:0
        }
    }
    showPolyline=function(){
        var pointArray = new Array();
        for(var i in this.props.points){

            pointArray[i]=new BMap.Point(this.props.points[i].Longtitude,this.props.points[i].Latitude);
        }
        var polyline = new BMap.Polyline(pointArray,
            {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5}
        );
        var map = new BMap.Map(this.refs.map);
        map.addOverlay(polyline);
        var point = pointArray[0];  // 创建点坐标
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);
    }
    showMap(){
        var map = new BMap.Map(this.refs.map);    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    }

    render(){
        if(i>0){
            this.showMap();
            console.log(showMap);
        }


        if(this.props.points[0]){
            console.log('render')
            this.showPolyline();
        }



        return <div style={{ background: '#fff', padding: 24, minHeight: 500 }}  ref="map"/>
    }
}

export  default  Map;