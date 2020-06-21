import React from 'react';
import cn from 'classnames';

import styles from './style.less';

export default ({ data = [], value, onChange }) => (
  <div className={styles.container}>
    {data.map(item => (
      <div
        key={item.id}
        className={cn(styles.tabItem, { [styles.active]: value === item.id })}
        onClick={() => onChange(item.id)}
      >
        <span>{item.name}</span>
      </div>
    ))}
  </div>
);
