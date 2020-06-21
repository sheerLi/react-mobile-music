import { createModel } from '@rematch/core';

export default createModel({
  state: {
    toastInfo: {},
    isInit: false,
  },
  effects: {
    async initEnv() {
      this.save({
        isInit: true,
      });
    },
  },
  reducers: {
    save(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },

    setToast(state, payload = {}) {
      if (typeof payload === 'string') {
        /* eslint-disable-next-line */
        payload = {
          msg: payload,
        };
      }

      const defaultInfo = {
        msg: '',
        position: 'bottom',
        timeout: 2000,
      };
      return {
        ...state,
        toastInfo: {
          ...defaultInfo,
          ...payload,
        },
      };
    },
  },
});
