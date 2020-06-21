import React from 'react';

import Mask from '../Mask';
import styles from './index.less';

const ErrorMessage = ({ text, onClick }) => (
  <Mask onClick={onClick}>
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <div className={styles.button} onClick={onClick}>
        关闭
      </div>
    </div>
  </Mask>
);

export default ErrorMessage;
