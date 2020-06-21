import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Tab } from '@/components';
import { TABS } from '@/constants/data';

import { Header, Banner } from './components';
import styles from './style.less';

class Home extends PureComponent {
  state = {
    tab: 1,
  };

  componentDidMount() {
    this.fetchBanners();
  }

  handleTabChange = value => {
    this.setState({
      tab: value,
    });
  };

  fetchBanners = () => {
    const { dispatch } = this.props;
    dispatch.home.fetchBanners();
  };

  render() {
    const { tab } = this.state;
    const { banners } = this.props;
    return (
      <>
        <Header className={styles.header}>
          <h3 className={styles.text}>React-Music</h3>
        </Header>
        <Tab data={TABS} value={tab} onChange={this.handleTabChange} />
        <Banner data={banners} />
      </>
    );
  }
}

const mapState = state => ({
  banners: state.home.banners,
});

const mapDispatch = dispatch => ({ dispatch });

export default connect(mapState, mapDispatch)(Home);
