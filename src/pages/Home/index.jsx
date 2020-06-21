import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Tab } from '@/components';
import { TABS } from '@/constants/data';

import { Header } from './components';
import Recommend from './recommend';
import Rank from './rank';
import Singer from './singer';

import styles from './style.less';

class Home extends PureComponent {
  state = {
    tab: 1,
  };

  componentDidMount() {
    this.fetchBanners();
    this.fetchSongList();
  }

  handleTabChange = value => {
    this.setState({
      tab: value,
    });
  };

  handleCardClick = value => {
    const { dispatch } = this.props;
    console.log(value);
    // todo
    dispatch.global.setToast({
      msg: '开发中，敬请期待...',
      position: 'middle',
    });
  };

  fetchBanners = () => {
    const { dispatch } = this.props;
    dispatch.home.fetchBanners();
  };

  fetchSongList = () => {
    const { dispatch } = this.props;
    dispatch.home.fetchSongList();
  };

  render() {
    const { tab } = this.state;
    const { banners, songList } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.rivet}>
          <Header className={styles.header}>
            <h3 className={styles.text}>React-Music</h3>
          </Header>
          <Tab data={TABS} value={tab} onChange={this.handleTabChange} />
        </div>
        {tab === 1 && (
          <Recommend banners={banners} songList={songList} onSelect={this.handleCardClick} />
        )}
        {tab === 2 && <Rank />}
        {tab === 3 && <Singer />}
      </div>
    );
  }
}

const mapState = state => ({
  banners: state.home.banners,
  songList: state.home.songList,
});

const mapDispatch = dispatch => ({ dispatch });

export default connect(mapState, mapDispatch)(Home);
