exports.name = 'lili'
module.exports = {wang:'ken'}
//exports就是module.exports的变量
console.log(module)
const leeTool= require("../lee-tool/index")
const str = leeTool.htmlEscape('<html><body id="body"></body></html')
console.log(str)
const unescapeStr = leeTool.htmlUnescape(str)
console.log(unescapeStr)