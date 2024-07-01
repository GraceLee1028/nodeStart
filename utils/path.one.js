const path = require('path');
//当前目录
const p = path.resolve();
console.log(p);
const p1 = path.resolve('../');
console.log(p1);
//路径拼接
const j = path.join(__dirname, 'config', 'config.base.js');
console.log(j);
//获取文件的扩展名
const ext = path.extname(j);
console.log('the file extension is :\n', ext);
//获取文件名
const fileName = path.basename(j, '.js');
console.log('filename does not include extend name=========', fileName);
