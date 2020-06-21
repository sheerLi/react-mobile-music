import axios from 'axios';
import qs from 'qs';

export default class Axios {
  static request(config) {
    return axios.request(config);
  }

  static get(url, data) {
    return axios.get(url, {
      params: data,
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
    });
  }

  static post(url, data) {
    return axios.post(url, data);
  }

  static put(url, data) {
    return axios.put(url, data);
  }

  static delete(url, data) {
    return axios.delete(url, data);
  }

  static setBaseURL(url) {
    axios.defaults.baseURL = url;
  }

  static setHeader(key, value) {
    axios.defaults.headers.common[key] = value;
  }

  static addRequestInterceptor(interceptor, onRejected) {
    axios.interceptors.request.use(interceptor, onRejected);
  }

  static addResponseInterceptor(interceptor, onRejected) {
    axios.interceptors.response.use(interceptor, onRejected);
  }
}
