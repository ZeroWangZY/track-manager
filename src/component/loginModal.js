import { Modal, Button } from 'antd';
import Login from './Login'
import React from 'react'
class LoginModal extends React.Component {
  state = { visible: true }
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
        <Modal okText="登录"
          title="请先登录"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
          maskClosable={false}
        >
        <Login handleOk = { this.handleOk.bind(this) } />
        </Modal>
      </div>
    );
  }
}
export default LoginModal;
