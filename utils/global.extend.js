/**
 * @func : 全局变量
 */

// console.log(global)
// 模块
const rd = require('./random.js')
console.log(rd.round())
// const filename = __filename
//当前模块的文件名称
console.log(__filename)
//当前模块的目录名称
console.log(__dirname)

