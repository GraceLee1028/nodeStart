const dateUtils = {
  /**
   * 是否是有效日期
   * @param {日期} date
   * @returns
   */
  isValidDate: function (date) {
    const isNaNFlag = isNaN(date.getTime());
    return date instanceof Date && !isNaNFlag;
  },
  /**
   * 把时间转为定义的格式
   * @param {*} date 时间
   * @param {*} format 格式yyyy-MM-dd hh:mm:ss
   * @returns
   */
  format: function (date, format = 'yyyy-MM-dd hh:mm:ss') {
    let dt = '';
    if (typeof date === 'object') {
      dt = date;
    } else {
      dt = date ? new Date(date) : new Date();
    }
    const addZero = value => {
      if (!value && value !== 0) {
        return '';
      }
      return (value + '').replace(/^\d{1}$/, function (st) {
        return st ? '0' + st : '';
      });
    };
    const newDate = format.replace(/[yMdhHms]+/g, function (str) {
      const strL = str.toLowerCase();
      let result = '';
      switch (strL) {
        case 'yyyy':
          console.log(dt);
          result = dt.getFullYear();
          break;
        case 'MM':
          result = addZero(dt.getMonth() + 1);
          break;
        case 'dd':
          result = addZero(dt.getDate());
          break;
        case 'hH':
          result = addZero(dt.getHours());
          break;
        case 'mm':
          result = addZero(dt.getMinutes());
          break;
        case 'ss':
          result = addZero(dt.getSeconds());
          break;
      }
      return result;
    });
    return newDate;
  },
  /**
   * 用/代替-，兼容IOS
   * @param {时间} date
   * @returns 返回时间毫秒
   */
  getTime(date) {
    return new Date(value.replace(/\-/g, '/')).getTime();
  }
};
export default dateUtils;
