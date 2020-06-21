import React from 'react';
import styles from './style.less';

export default ({ title, children }) => (
  <div className={styles.container}>
    <h4 className={styles.title}>{title}</h4>
    {children}
  </div>
);
