exports.name = 'lili'
module.exports = {wang:'ken'}
//exports就是module.exports的变量
console.log(module)
//引入本地的
// const leeTool= require("../lee-tool/index")
// const str = leeTool.htmlEscape('<html><body id="body"></body></html')
// console.log(str)
// const unescapeStr = leeTool.htmlUnescape(str)
// console.log(unescapeStr)

//引入上传到npm的
const leeTool = require("lee-tool")
console.log(leeTool)
const now = new Date();
const dateOne = leeTool.dateFormat(now,'yyyy-mm-dd h:m:s');
const dateTwo = leeTool.dateFormat(now,'yyyy年mm月dd日 h时m分s秒');
console.log(dateOne)
console.log(dateTwo)
const str = leeTool.htmlEscape('<html><body id="body"></body></html')
console.log(str)
const unescapeStr = leeTool.htmlUnescape(str)
console.log(unescapeStr)