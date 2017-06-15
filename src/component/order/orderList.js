'use strict';
import React  from "react";
import { Table, Icon } from 'antd';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { Row,Col } from 'antd';

const columns = [{
  title: 'ID',
  dataIndex: 'Orderid',
  key: 'Orderid',
}, {
  title: '接单出租车ID',
  dataIndex: 'Taxiid',
  key: 'Taxiid',
}, {
  title: '乘客ID',
  dataIndex: 'Passengerid',
  key: 'Passengerid',
},{
  title: '上车时间',
  dataIndex: 'StartTime',
  key: 'StartTime',
}, {
  title: '下车时间',
  dataIndex: 'EndTime',
  key: 'EndTime',
},{
  title: '操作',
  key: 'action',
  render: (text, record) => {
    return (
      <span>
      <Col span={5} >
        <Button>1</Button>
      </Col>
      <Col span={5} >
        <Button>2</Button>
      </Col>
      <Col span={5} >
        <Button>3</Button>
      </Col>
      </span>
    );
  },
}];

class OrderList extends React.Component{

    render(){
      return (
        <div>
        <Table columns={columns} dataSource={this.props.orders} />
        </div>
      )
    }
}

export default OrderList;
