'use strict';
import React  from "react";
import { Tabs } from 'antd';
import MapController from './MapController'
import Map from '../../component/Map'
import {fetchHotPoints} from '../../api/api'
const TabPane = Tabs.TabPane;
class StatisticController extends React.Component{
    constructor(){
      super();
      this.state={
        points:[]
      }
    }
    componentDidMount(){
      fetchHotPoints().then((json=>{
        this.setState({
          points:json
        })
      }))
    }
    render(){
      return (
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="轨迹询查" key="1"><MapController/></TabPane>
          <TabPane tab="热门上车地点" key="2"><Map points ={this.state.points} type = 'heat'/></TabPane>
          <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
        </Tabs>
      )
    }
}

export default StatisticController;
