'use strict';
import React  from "react";
import { Tabs } from 'antd';
import MapController from './MapController'
const TabPane = Tabs.TabPane;

class StatisticController extends React.Component{

    render(){
      return (
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="轨迹询查" key="1"><MapController/></TabPane>
          <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
        </Tabs>
      )
    }
}

export default StatisticController;
