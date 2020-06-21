import React from 'react';
import cn from 'classnames';

import styles from './style.less';

export default ({ children, className }) => (
  <button className={cn(styles.btn, className)}>{children}</button>
);
