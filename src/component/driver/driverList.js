'use strict';
import React  from "react";
import { Table, Icon } from 'antd';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { Row,Col } from 'antd';

const columns = [{
  title: 'ID',
  dataIndex: 'driverID',
  key: 'driverID',
}, {
  title: '司机姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '司机电话',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => {
    return (
      <span>
      <Col span={4} >
        <Button type='primary'>修改</Button>
      </Col>
      <Col span={4} >
        <Button type='danger'>删除</Button>
      </Col>
      
      </span>
    );
  },
}];

class DriverList extends React.Component{

    render(){
      return (
        <div>
        <Table columns={columns} dataSource={this.props.drivers} />
        </div>
      )
    }
}

export default DriverList;
