import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Tab } from '@/components';
import { TABS } from '@/constants/data';

import { Header } from './components';
import styles from './style.less';

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
        <Header className={styles.header}>
          <h3 className={styles.text}>React-Music</h3>
        </Header>
        <Tab data={TABS} value={tab} onChange={this.handleTabChange} />
      </>
    );
  }
}

const mapDispatch = dispatch => ({ dispatch });

export default connect(null, mapDispatch)(Home);
