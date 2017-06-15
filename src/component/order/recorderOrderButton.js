import { Modal, Button } from 'antd';
import React from 'react'
import Map from '../Map'
import {fetchPointsByOrder} from '../../api/api'
class RecorderOrderButton extends React.Component {
  state = { visible: false ,points:[]}
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
  componentDidMount(){

  }
  render() {
    return (
      <div>
        <Button onClick={this.showModal}>订单路径</Button>
        <Modal
          title="订单信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Map type='orderline' id={this.props.id} points={this.state.points}/>
        </Modal>
      </div>
    );
  }
}

export default RecorderOrderButton;
