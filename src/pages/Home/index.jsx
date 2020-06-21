import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Tab } from '@/components';
import { TABS } from '@/constants/data';

class Home extends PureComponent {
  state = {
    tab: 1,
  };

  handleTabChange = value => {
    this.setState({
      tab: value,
    });
  };

  render() {
    const { tab } = this.state;
    return (
      <>
        <Tab data={TABS} value={tab} onChange={this.handleTabChange} />
      </>
    );
  }
}

const mapDispatch = dispatch => ({ dispatch });

export default connect(null, mapDispatch)(Home);
