/**
 *
 * @param {日期} dataStr
 * @param {格式} format yyyy-MM-dd hh:mm:ss
 */
function dateFormat(dataStr, format = 'yyyy-MM-dd hh:mm:ss') {
  let dt = '';
  if (typeof dataStr === 'object') {
    dt = dataStr;
  } else {
    dt = dataStr ? new Date(dataStr) : new Date();
  }
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
}
function addZero(value) {
  if (!value && value !== 0) {
    return '';
  }
  return (value + '').replace(/^\d{1}$/, function (st) {
    return st ? '0' + st : '';
  });
}
/**
 * 把分割-替换为/
 * @param {*} value 时间字符串
 * @returns
 */
function dateReplaceSplit(value) {
  return new Date(value.replace(/\-/g, '/')).getTime();
}
module.exports = {
  dateFormat,
  dateReplaceSplit
};
