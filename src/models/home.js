import { createModel } from '@rematch/core';
import { HomeService } from '@/services';

export default createModel({
  state: {
    banners: [],
    songList: [],
  },
  effects: {
    async fetchBanners() {
      const res = await HomeService.getBanners();
      this.save({
        banners: res.banners,
      });
    },

    async fetchSongList() {
      const res = await HomeService.getSongList();
      this.save({
        songList: res.result,
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
