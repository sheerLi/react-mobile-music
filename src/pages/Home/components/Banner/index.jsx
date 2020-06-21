import React from 'react';
import { Swiper } from '@/components';

import styles from './style.less';

export default ({ data }) => (
  <div className={styles.container}>
    <div className={styles.item}>
      <Swiper data={data} />
    </div>
  </div>
);
