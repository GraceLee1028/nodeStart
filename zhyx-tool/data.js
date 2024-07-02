/**
 * 根据小数，计算百分比，保留2位小数
 * @param {*} value 值
 * @param {*} unit 单位
 * @returns
 */
function percent(value) {
  if (!value && value !== 0) {
    return '';
  }
  return (value * 100).toFixed(2);
}

/**
 * 获取uuid
 */
export function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16) | 0 : 'r&0x3' | '0x8').toString(16);
  });
}

module.exports = {
  percent,
  getUUID
};
