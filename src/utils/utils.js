
/**
 * 金额转换：分转换为元
 * 1.00 显示 1
 * 1.10 显示 1.1
 * 1.11 显示 1.11
 * @param {number} value 金额（分）
 */
export const formatPrice = value =>
  value
    ? parseFloat((value || 0) / 100, 10)
        .toFixed(2)
        .replace(/\.00$/, '')
        .replace(/(\.\d)0$/, '$1')
    : 0;

export function has(a, b) {
  let result = false;
  a.forEach(x => {
    b.forEach(y => {
      if (x === y) {
        result = true;
      }
    });
  });
  return result;
}

export function getUrlParameter(name) {
  // eslint-disable-next-line no-useless-escape
  const n = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${n}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default { handleDownload };
