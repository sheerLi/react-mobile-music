import React from 'react';
import cn from 'classnames';

import styles from './style.less';

export default ({ children, className }) => (
  <div className={cn(styles.header, className)}>{children}</div>
);
