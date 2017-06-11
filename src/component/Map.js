/**
 * Created by ZeroW on 2017/6/10.
 */
import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import {address} from '../config/config';

class Map extends React.Component{

    showPolyline=function(){
        var pointArray = new Array();
        for(var i in this.props.points){

            pointArray[i]=new BMap.Point(this.props.points[i].PositionX,this.props.points[i].PositionY);
        }
        var polyline = new BMap.Polyline(pointArray,
            {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5}
        );
        var map = new BMap.Map(this.refs.map);
        map.addOverlay(polyline);
        var point = pointArray[0];  // 创建点坐标
        map.centerAndZoom(point, 15);
    }

    render(){
        if(this.props.points[0]){
            console.log('render')
            this.showPolyline();
        }





        return <div style={{ background: '#fff', padding: 24, minHeight: 500 }}  ref="map"/>
    }
}

export  default  Map;