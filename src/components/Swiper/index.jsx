import 'swiper/css/swiper.css';

import React from 'react';
import ReactIdSwiper from 'react-id-swiper';

import styles from './style.less';

export default ({ data = [] }) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: true,
    spaceBetween: 30,
  };
  return (
    <ReactIdSwiper {...params}>
      {data.map(item => (
        <div key={item.imageUrl}>
          <img className={styles.image} src={item.imageUrl} alt={item.typeTitle} />
        </div>
      ))}
    </ReactIdSwiper>
  );
};
