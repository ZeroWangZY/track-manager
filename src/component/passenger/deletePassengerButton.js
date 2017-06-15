import { Popconfirm, message,Button} from 'antd';
import React from 'react'
import {store} from '../../index';
import {deletePassenger}  from '../../redux/action/index'

class DeletePassengerButton extends React.Component {

    confirm(e) {
      console.log('id in deletePassenger');
      console.log(this.props);
      store.dispatch(deletePassenger(this.props.id));
      message.success('删除成功');
    }

    cancel(e) {
      console.log(e);
    }
    render(){
      return (
        <Popconfirm title="确定要删除这位乘客吗?" id={this.props.passengerid} onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
          <Button type="danger" >删除</Button>
        </Popconfirm>
      )
    }
}

export default DeletePassengerButton;
