import React from 'react';
import { Banner, SongList } from './components';

export default ({ banners, songList, onSelect }) => (
  <>
    <Banner data={banners} />
    <SongList data={songList} onSelect={onSelect} />
  </>
);
