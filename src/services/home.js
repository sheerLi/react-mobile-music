import { Axios } from '@/helpers';
import { BANNER } from '@/constants/api';

export default class HomeService {
  static getBanners = () => {
    return Axios.get(BANNER);
  };
}
