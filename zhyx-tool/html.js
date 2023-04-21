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
  htmlUnescape,
  htmlEscape
}