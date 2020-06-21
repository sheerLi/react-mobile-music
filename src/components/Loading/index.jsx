import React from 'react';

import styles from './index.less';

const Loading = () => (
  <div className={styles.container}>
    <div>
      <div className={styles.spinner} />
    </div>
  </div>
);

export default Loading;
