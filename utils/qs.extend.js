/**
 * @func：querystring()
 */
const qs = require('querystring')
//字符串条件转为对象
const search = 'name=123&age=123';
console.log(qs.parse(search))//输出：{ name: '123', age: '123' }

//将对象转为search字符串
const searObj = {
  name:'Jolia',
  age:123
}

console.log(qs.stringify(searObj))//输出: name=Jolia&age=123

//escape()：进行编码
const qsEncode = qs.escape(search);
console.log(qsEncode)//输出：name%3D123%26age%3D123
//unescape()：进行解码
const qsDecode = qs.unescape(qsEncode);
console.log(qsDecode)//输出：name=123&age=123

