'use strict';
import React  from "react";
import MapController from './MapController'
import {getDriverCount,getPassengerCount,getTaxiCount,getOrderCount} from '../../api/api';
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import { Row,Col } from 'antd';
import ChartModal from '../../component/ChartModal'

class HomeController extends React.Component{

    constructor(){
      super();
      this.state={
        passengerCount:0,
        driverCount:0,
        taxiCount:0,
        orderCount:0
      }
    }


    componentDidMount(){
        getPassengerCount().then((json=>{
          this.setState({
            passengerCount:json[0].count
          })
        }));
        getDriverCount().then((json=>{
          this.setState({
            driverCount:json[0].count
          })
        }));
        getTaxiCount().then((json=>{
          this.setState({
            taxiCount:json[0].count
          })
        }));
        getOrderCount().then((json=>{
          this.setState({
            orderCount:json[0].count
          })
        }));




    }

    render(){
      return (
        <Row gutter={8}>
          <Col span={8} >
            <Card title="乘客总数" extra={<Link to="/passenger">详情</Link>} >
            <div>
              {this.state.passengerCount} 人
            </div>
            </Card>
          </Col>
          <Col span={8} >
            <Card title="司机总数" extra={<Link to="/driver">详情</Link>}>
            <div>
              {this.state.driverCount} 人
            </div>
            </Card>
          </Col>
          <Col span={8} >
            <Card title="出租车总数" extra={<Link to="/">详情</Link>}>
            <div>
              {this.state.taxiCount} 辆
            </div>
            </Card>
          </Col>
          <Col span={8} >
            <Card title="订单总数" extra={<Link to="/order">详情</Link>}>
            <div>
              {this.state.orderCount} 单
            </div>
            </Card>
          </Col>
          <Col span={8} >
            <Card title="营业额" extra={<ChartModal/>}>
            <div>
              24148 元
            </div>
            </Card>
          </Col>
        </Row>

      )
    }
}

export default HomeController;
