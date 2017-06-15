'use strict';
import React  from "react";
import MapController from './MapController'
import {getPointById,getPassengerCount} from '../../api/api';
import { Card } from 'antd';
import { Link } from 'react-router-dom'
class HomeController extends React.Component{

    constructor(){
      super();
      this.state={
        passengerCount:0
      }
    }


    componentDidMount(){
        getPassengerCount().then((json=>{
          this.setState({
            passengerCount:json[0].count
          })
        }))

    }

    render(){
      return (
        <div>
        <Card title="乘客总数" extra={<Link to="/passenger">详情</Link>} style={{ width: 300 }}>
        <div>
          {this.state.passengerCount} 人
        </div>
        </Card>
        </div>

      )
    }
}

export default HomeController;
