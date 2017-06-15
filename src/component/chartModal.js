import Chart from './chart'
import React from 'react'
import { Button, Modal, Form, Input, Radio,InputNumber } from 'antd';

class ChartModal extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <a type="primary" onClick={this.showModal}>详情</a>
        <Modal
          width='650'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Chart/>
        </Modal>
      </div>
    );
  }
}

export default ChartModal
