import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import fixModal from '@/utils/fixModal';
import { store } from '@/utils/reduxStore';

import App from './App';

// 修复modal滚动穿透
fixModal();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
