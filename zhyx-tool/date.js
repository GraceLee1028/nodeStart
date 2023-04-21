/**
 * 
 * @param {日期} dataStr 
 * @param {格式} format yyyy-mm-dd h:m:s
 */
 function dateFormat(dataStr,format='yyyy-mm-dd h:m:s'){
  let dt = ''
  if(typeof dataStr==='object'){
    dt = dataStr
  }else{
    dt = dataStr?new Date(dataStr):new Date();
  }
  const newDate = format.replace(/[a-z]+/g,function(str){
      const strL = str.toLowerCase();
      let result = ''
      switch(strL){
        case 'yyyy':
          console.log(dt)
          result= dt.getFullYear()
          break;
        case 'mm':
          result= addZero(dt.getMonth()+1)
          break;
        case 'dd':
          result= addZero(dt.getDate());
          break;
        case 'h':
          result= addZero(dt.getHours());
          break;
        case 'm':
          result= addZero(dt.getMinutes());
          break;
        case 's':
          result= addZero(dt.getSeconds());
          break;  
      }
      return result
  })
  return newDate
}
function addZero(value){
  if(!value&&value!==0){
    return '';
  }
  return (value+'').replace(/^\d{1}$/,function(st){
    return  st?'0'+st:'';
  });
}
module.exports = {
  dateFormat
}