import { Axios } from '@/helpers';
import { BANNER, SONG_LIST } from '@/constants/api';

export default class HomeService {
  static getBanners = () => {
    return Axios.get(BANNER);
  };

  static getSongList = () => {
    return Axios.get(SONG_LIST);
  };
}
