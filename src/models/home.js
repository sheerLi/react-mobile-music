import { createModel } from '@rematch/core';
import { HomeService } from '@/services';

export default createModel({
  state: {
    banners: [],
  },
  effects: {
    async fetchBanners() {
      const res = await HomeService.getBanners();
      this.save({
        banners: res.banners,
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
  },
});
