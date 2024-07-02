const NumberUtils = {
  /**
   * 把小数转换为百分比
   * @param {*} value 值
   * @param {*} point 小数位
   * @returns
   */
  toPercent(value, point = 2) {
    if (!value && value !== 0) {
      return '';
    }
    return (value * 100).toFixed(point) + '%';
  },
  /**
   * 千位分割
   * @param {*} value 值
   * @returns
   */
  toMoney(value, point = 2) {
    if (!value && value !== 0) {
      return '';
    }
    value = Number(value).toFixed(point);
    const valArr = value.split('.');
    const reg = /(?!^)(?=(\d{3})+$)/g;
    const result = `${valArr[0]}`.replace(reg, '$&,') + '.' + valArr[1];
    return result;
  }
};

export default NumberUtils;
