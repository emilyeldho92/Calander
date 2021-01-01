// import {Modal, Button} from 'antd';
import React, {Component} from 'react';

class AddEventModal extends Component {
  state = {
    title: '',
  };

  static getDerivedStateFromProps (nextProps) {
    if (nextProps.eventTitle) {
      return {
        title: nextProps.eventTitle,
      };
    } else {
      return {
        title: '',
      };
    }
  }


  handleTitleChange = event => {
    this.setState ({
      title: event.target.value,
    });
  };


  handleOk = () => {
    this.props.onOk (this.state.title);
  };

  render () {
    const {title} = this.state;
    return (
      <Modal
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.props.onClose}
        footer={[
          <Button key="back" onClick={this.props.onCancel}>
            {this.props.editMode ? 'Delete' : 'Cancel'}
          </Button>,
          <Button key="submit" type="primary" onClick={this.handleOk}>
            {this.props.editMode ? 'Update Event' : 'Add Event'}
          </Button>,
        ]}
      >
      </Modal>
    );
  }
}

export default AddEventModal;
