import qs from 'qs';

export default class QueryString {
  static getParam(key) {
    const { search } = window.location;

    const params = qs.parse(search, { ignoreQueryPrefix: true });

    if (params[key]) {
      return decodeURIComponent(params[key]);
    }

    return '';
  }
}
