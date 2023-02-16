/**
 * 
 * @param {日期} dataStr 
 * @param {格式} format yyyy-mm-dd h:m:s
 */
function dateFormat(dataStr,format='yyyy-mm-dd h:m:s'){
  const dt = dataStr?new Date(dataStr):new Date();
  const neWdate = format.replace(/[a-z]+/g,function(str){
      const strL = str.toLowerCase();
      let result = ''
      console.log(strL)
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
  console.log(neWdate)
}
function addZero(value){
  if(!value&&value!==0){
    return '';
  }
  return (value+'').replace(/^\d{1}$/,function(st){
    return  st?'0'+st:'';
  });
}
// html转义
function htmlEscape(str){
  if(!str){
    return ''
  }
  const newStr = str.replace(/<|>|"|&/g,function(match){
    const obj = {'<':'&lt;',">":"&gt;",'"':"&quot;","&":"&amp;"}
    return obj[match]
  })
  return newStr
}
//html的还原
function htmlUnescape(str){
  if(!str){
    return ''
  }
  const newStr = str.replace(/&lt;|&gt;|&quot;|&amp;/g,function(match){
    const obj = {'&lt;':'<',"&gt;":">","&quot;":'"',"&amp;":"&"}
    return obj[match]
  })
  return newStr
}

module.exports = {
  dateFormat,
  htmlEscape,
  htmlUnescape
}