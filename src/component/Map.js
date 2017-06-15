/**
 * Created by ZeroW on 2017/6/10.
 */
import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');
var coordtransform=require('coordtransform');
import {points2Bpoints} from '../utils/Map';
import {fetchPointsByOrder} from '../api/api'

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
        var startPoint = new BMap.Marker(pointArray[0]);
        var endPoint = new BMap.Marker(pointArray[pointArray.length-1]);
        var polyline = new BMap.Polyline(pointArray,
            {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5}
        );
        var startLabel = new BMap.Label("起点",{offset:new BMap.Size(20,-10)});
	      startPoint.setLabel(startLabel);
        var map = new BMap.Map(this.refs.map);
        var endLabel = new BMap.Label("终点",{offset:new BMap.Size(20,-10)});
	      endPoint.setLabel(endLabel);
        var map = new BMap.Map(this.refs.map);
        map.addOverlay(polyline);
        map.addOverlay(startPoint);
        map.addOverlay(endPoint);
        map.centerAndZoom(pointArray[0], 15);
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.enableScrollWheelZoom(true);
    }

    showPolylineOrder=function(points){

        var pointArray = points2Bpoints(points);
        var startPoint = new BMap.Marker(pointArray[0]);
        var endPoint = new BMap.Marker(pointArray[pointArray.length-1]);
        var polyline = new BMap.Polyline(pointArray,
            {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5}
        );
        var startLabel = new BMap.Label("起点",{offset:new BMap.Size(20,-10)});
	      startPoint.setLabel(startLabel);
        var map = new BMap.Map(this.refs.map);
        var endLabel = new BMap.Label("终点",{offset:new BMap.Size(20,-10)});
	      endPoint.setLabel(endLabel);
        var map = new BMap.Map(this.refs.map);
        map.addOverlay(polyline);
        map.addOverlay(startPoint);
        map.addOverlay(endPoint);
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
        if(this.props.type=='orderline'){
          fetchPointsByOrder(this.props.id).then((json)=>{
            this.showPolylineOrder(json[0])
          })
        }else if(this.props.type=='heat'){
          this.showHeat();
        }
    }





    render(){
      console.log(this.props.points);
        if(this.props.points[0]){
            if(this.props.type=='line'){
              this.showPolyline();
            }
        }



        return (

                <div style={{ background: '#fff', padding: 24, minHeight: 500 }}  ref="map">
                </div>
        )
    }
}

export  default  Map;
