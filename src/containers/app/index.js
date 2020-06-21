import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ErrorMessage from '@/components/ErrorMessage';
import Loading from '@/components/Loading';
import Toast from '@/components/Toast';
import { AppService } from '@/services';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  componentDidMount() {
    this.initGlobalEnv();
    this.initResponseHandle();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  handleMessageClick = () => {
    this.setState({ error: '' });
  };

  initResponseHandle = () => {
    AppService.addErrorHandle(data => {
      this.setState({
        error: data.msg,
      });
    });
  };

  initGlobalEnv = () => {
    const { dispatch } = this.props;

    dispatch.global.initEnv();
  };

  render() {
    const { error } = this.state;
    const {
      children,
      loading,
      toastInfo: { msg: toastMsg, position, timeout },
      isInit: isEnvInit,
    } = this.props;

    if (!isEnvInit) {
      return null;
    }

    return (
      <>
        {children}
        {error && <ErrorMessage text={error} onClick={this.handleMessageClick} />}
        {loading && <Loading />}
        {toastMsg && <Toast msg={toastMsg} position={position} timeout={timeout} />}
      </>
    );
  }
}

const mapState = state => ({
  loading: state.loading.global,
  toastInfo: state.global.toastInfo,
  isInit: state.global.isInit,
});

export default connect(mapState, null)(withRouter(AppContainer));
