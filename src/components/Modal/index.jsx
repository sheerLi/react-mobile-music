import 'rmc-dialog/assets/index.css';

import './index.less';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import Dialog from 'rmc-dialog';

class Modal extends PureComponent {
  handleCancel = e => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel(e);
    }
  };

  handleOk = e => {
    const { onOk } = this.props;
    if (onOk) {
      onOk(e);
    }
  };

  renderFooter = () => {
    const { okText, cancelText } = this.props;
    return (
      <div className="modal__button-group--h modal__button-group--normal">
        <a className={['modal__button']} onClick={this.handleCancel}>
          {cancelText}
        </a>
        <a className={['modal__button']} onClick={this.handleOk}>
          {okText}
        </a>
      </div>
    );
  };

  render() {
    const {
      footer,
      visible,
      onClose,
      wrapClassName,
      centered,
      children,
      ...restProps
    } = this.props;
    return (
      <Dialog
        {...restProps}
        wrapClassName={classNames({ [`modal--centered`]: !!centered }, wrapClassName)}
        onClose={onClose}
        maskClosable={false}
        visible={visible}
        footer={footer === undefined ? this.renderFooter() : footer}
      >
        {children}
      </Dialog>
    );
  }
}

Modal.propTypes = {
  okText: PropTypes.node,
  cancelText: PropTypes.node,
  visible: PropTypes.bool,
  centered: PropTypes.bool,
  closable: PropTypes.bool,
};

Modal.defaultProps = {
  okText: '确定',
  cancelText: '取消',
  visible: false,
  centered: true,
  closable: false,
};

export default Modal;
