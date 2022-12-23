/**
 * @func 路径模块处理
 */
const path = require('path');
//join()
const pathStr = path.join('a/b','../','c.txt')
console.log(pathStr)
// resolve()
//输出：当前文件的绝对路径【F:\lifeng2022\owncode\express-demo 】
const pathS = path.resolve();
console.log(pathS)
//返回当前绝对路径【运行时的路径】拼接现在的参数【F:\lifeng2022\owncode\express-demo\utils】
const pathSTwo = path.resolve('utils')
console.log(pathSTwo)

//path.parse():通过路径字符串返回一个对象
/*输出：{
  root: '/',
  dir: '/home/user/dir',
  base: 'text.txt',
  ext: '.txt',
  name: 'text'
}*/
console.log(path.parse('/home/user/dir/text.txt'))

//basename(path,尾部文件分割符)：返回path的最后一部分
const pathOne = '../public/text.txt'
const bn = path.basename(pathOne);
console.log(bn)//输出text.txt
const bnTwo = path.basename(pathOne,'.txt')
console.log(bnTwo)//输出text
// const bgTwo = path.posix.basename(pathOne)
// console.log(bgTwo)

//dirname(path)：返回一个path的目录名
//pathSTwo=F:\lifeng2022\owncode\express-demo\utils;
const dir = path.dirname(pathSTwo)
console.log(dir)//输出：F:\lifeng2022\owncode\express-demo

//extname(path)：返回path的扩展名
const ext = path.extname('index.html')
console.log(ext)//输出.html


//path.format():从一个对象返回路径字符串
let pathF = path.format({
  root:'/',
  dir:'public',//root和dir: 忽略root
  base:'text.txt'
})
console.log(pathF)//输出: public\text.txt
console.log(path.normalize(pathF))
//normalize(path)：规范化路径
const pathN = path.normalize('/public/\html/text.txt')
console.log(pathN)