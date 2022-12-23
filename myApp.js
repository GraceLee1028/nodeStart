
let express = require('express');
const path = require('path')
const fs = require('fs')

const bodyParser = require('body-parser')
let app = express();
let env = process.env;

//下载文件
app.get("/down", (req, res) => {
  const query = res.query;
  let filename = '预问诊科室对照.zip';
  //获取文件的位置 和文件的大小
  let filePath = path.resolve(__dirname, 'public',filename);
  console.log('文件路径：',filePath)
  let size = fs.statSync(filePath).size;
  console.log('文件大小: ',size)
  //获取请求头的range字段
  // let range = req.headers["range"];
  // let file = path.resolve(__dirname, distPath, filename);

  //不使用分片下载  直接传输文件
  // if (!range) {
  //   //res.set({'Accept-Ranges':'bytes'})
  //   res.set({
  //     "Content-Type": "application/octet-stream",
  //     "Content-Disposition": `attachment; filename=${filename}`,
  //   });
  //   fs.createReadStream(file).pipe(res);
  //   return;
  // }
  //获取分片的开始和结束位置
  // const {startIndex=0,endIndex=11776} = query;
  const startIndex=0,endIndex=11776;

  //分片开始 结束位置不对 拒绝下载
  if (startIndex > size || endIndex > size) {
    res.set({ "Content-Range": `bytes */${size}`});
    res.status(416).send(null);
    return;
  }
  //开始分片下载
  res.status(200);
  // res.set({
  //   "Accept-Ranges": "bytes",
  //   "Content-Range": `bytes ${start}-${end ? end : size}/${size}`,
  // });

  console.log(startIndex + '---' + endIndex)
  fs.createReadStream(filePath, { start:startIndex, end:endIndex }).pipe(res);
});

//从客户端获取查询参数
// 客户端get请求】:http://192.168.100.155:3000/name?name=lee&age=13
//【客户端得到】：{"name": "lee","age": "13"}

// 客户端post请求】:http://192.168.100.155:3000/name?name=lee&age=13
//【客户端得到】：{"name": "lee","age": "13"}

// app.route('/name').get(function(req,res){
//   console.log('get请求')
//   console.log(req)
//   res.send(req.query)
// }).post(function(req,res){
//   console.log('post请求')
//   console.log(req.body);
//   const d = req.body
//   res.send(d)
// })
// //【客户端请求】：http://localhost:3000/json
// //【客户端得到】：json数据
// app.get('/json', function(req, res) {
//   var string = "Hello json";
//   if(env.MESSAGE_STYLE==='uppercase'){
//     string = string.toUpperCase();
//   }
//   res.json({ "message":  string});
// })
// //中间件
//【客户端请求】：http://localhost:3000/now
//【客户端得到】：{"time":"Sat Dec 10 2022 14:27:58 GMT+0800 (中国标准时间)"}
app.get('/now',function(req, res, next) {
  //中间件函数
  req.time = new Date().toString();
  next();
},function(req,res){
  //最终处理
  res.send({time:req.time})
})

// //【客户端请求】：http://localhost:3000/lee/echo
// //【客户端得到】：{"echo":"lee"}
// app.get('/:word/echo',function(req, res, next) {
//   //中间件函数
//   console.log(req.params.word)
//   next();
// },function(req,res){
//   //最终处理
//   res.send({echo:req.params.word})
// })

// let static = express.static(__dirname + '/public')
// app.use('/public',static)





































module.exports = app;
