import React from 'react'
import { Button, Modal, Form, Input, Radio,InputNumber } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="编辑用户信息"
        okText="确定"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form vertical>
          <FormItem label='乘客ID' className="collection-create-form_last-form-item" >
            {getFieldDecorator('passengerid', {
              rules: [{ required: true, message: 'Please input id of passenger!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label='乘客姓名'>
            {getFieldDecorator('passengername', {
              rules: [{ required: true, message: 'Please input the name of passenger!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="乘客电话">
            {getFieldDecorator('phone',{
                rules: [{ required: true, message: 'Please input the phone number of passenger!' }],
            })(<Input />)}
          </FormItem>

        </Form>
      </Modal>
    );
  }
);

class EditPassengerButton extends React.Component {
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
        <Button type="primary" onClick={this.showModal}>修改</Button>
        <Modal
          title="编辑乘客信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <CollectionCreateForm
            ref={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
        />
        </Modal>
      </div>
    );
  }
}

export default EditPassengerButton;
