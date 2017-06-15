'use strict';
import React  from "react";
import { Table, Icon } from 'antd';
import { Button, Modal, Form, Input, Radio } from 'antd';
import EditPassengerButton from './editPassengerButton'
import DeletePassengerButton from './deletePassengerButton'
import RecorderPassengerButton from './recorderPassengerButton'
import { Row,Col } from 'antd';

const columns = [{
  title: 'ID',
  dataIndex: 'passengerid',
  key: 'passengerid',
}, {
  title: '乘客姓名',
  dataIndex: 'passengername',
  key: 'passengername',
}, {
  title: '乘客电话',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => {
    return (
      <span>
      <Col span={4} >
        <EditPassengerButton />
      </Col>
      <Col span={4} >
        <DeletePassengerButton passengerid={text.passengerid}/>
      </Col>
      <Col span={4} >
        <RecorderPassengerButton />
      </Col>
      </span>
    );
  },
}];

class PassengerList extends React.Component{

    render(){
      return (
        <div>
        <Table columns={columns} dataSource={this.props.passengers} />

        </div>
      )
    }
}

export default PassengerList;
