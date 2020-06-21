import React from 'react';
import { Panel } from '@/components';

import styles from './style.less';

export default ({ data, onSelect }) => (
  <Panel title="推荐歌单">
    <div className={styles.cardList}>
      {data.map(item => (
        <div key={item.id} className={styles.card} onClick={() => onSelect(item)}>
          <img className={styles.image} key={item.id} src={item.picUrl} alt="" />
          <div className={styles.desc}>{item.name}</div>
        </div>
      ))}
    </div>
  </Panel>
);
