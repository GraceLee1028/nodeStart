/**
 * @func： url地址处理和解析
 * 
 */
//当下方法是新版node的api
const newUrl = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash','https://user:pass@sub.host.com:8080')
console.log(newUrl)
console.log('pathname:',newUrl.pathname);
console.log('hash:',newUrl.hash);
console.log('search:',newUrl.search);
console.log('query:',newUrl.query);
console.log('port:',newUrl.port);
console.log('协议protocol:',newUrl.protocol);


//  当下方法是旧版node的api:  url.parse,  url.format,  url.resolve
const url = require('url');
//url.parse(url)：把url地址解析成url对象
const myURL =url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');



console.log(myURL)
console.log('pathname:',myURL.pathname);
console.log('hash:',myURL.hash);
console.log('search:',myURL.search);
console.log('query:',myURL.query);
console.log('port:',myURL.port);
console.log('协议protocol:',myURL.protocol);

//url.format(url对象):把url对象转为url地址
const urlStr = url.format(myURL)
console.log(urlStr)

// resolve():拼接
const a1 = url.resolve('/one','two')
console.log(a1)//输出/two

const a = url.resolve('/one/','two')
console.log(a)//输出/one/two
const b = url.resolve('http://www.baidu.com/one/','two')
console.log(b)
