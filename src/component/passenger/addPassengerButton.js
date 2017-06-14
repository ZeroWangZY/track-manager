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
        title="添加用户"
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

class AddPassengerButton extends React.Component{

    state = {
      visible: false,
    };

    showModal = () => {
      this.setState({ visible: true });
    }
    handleCancel = () => {
      this.setState({ visible: false });
    }
    handleCreate = () => {
      const form = this.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }

        console.log('Received values of addTodo form: ', values);
        this.props.addPassenger(values);
        form.resetFields();
        this.setState({ visible: false });
      });
    }
    saveFormRef = (form) => {
      this.form = form;
    }
    render() {
        return (
                <div>
                <Button type="primary" onClick={this.showModal}>添加乘客</Button>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}



export default AddPassengerButton
