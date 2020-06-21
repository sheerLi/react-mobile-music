import React from 'react';
import { connect } from 'react-redux';

import classNames from 'classnames';

import styles from './index.less';

class Toast extends React.PureComponent {
  componentDidMount() {
    const { setToast, timeout } = this.props;
    setTimeout(() => {
      setToast('');
    }, timeout);
  }

  render() {
    const { msg, position } = this.props;

    return (
      <div className={classNames(styles.toast, styles[position])}>
        <span dangerouslySetInnerHTML={{ __html: msg }} />
      </div>
    );
  }
}

Toast.defaultProps = {
  position: 'bottom',
};

const mapState = state => ({
  toastInfo: state.global.toastInfo,
});

const mapDispatch = dispatch => ({
  setToast: dispatch.global.setToast,
});

export default connect(mapState, mapDispatch)(Toast);
