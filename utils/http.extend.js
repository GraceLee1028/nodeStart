/**
 * 内置http模块
 */
const http = require('http');
const url = require('url');
function getStatus(url){
  let status=['/','/list','/jsonp'].includes(url)?200:404
  return status;
}
function rendHtml(url,obj){
  let html=''
  switch(url){
    case '/':
      html = '<h1>首页</h1>'
      break;
    case '/list':
      html = '<h1>列表页面</h1>'
      break;
    case '/jsonp'://Content-Type不能是text/html,不然该接口会报错
      html = `${obj.callback}(${JSON.stringify({name:'lee'})})`
      break;
  }
  return html;
}
//创建服务器
// http.createServer((req,res)=>{
//   // console.log(req)
//   console.log('请求地址：',req.url)
//   console.log('请求方法：',req.method)
//   const url = req.url;
//   //中文需要配置charset=UTF8,避免乱码
//   //设置响应头
//   res.writeHead(getStatus(url),{'Content-Type':'text/html;charset=utf-8'})
//   const html = rendHtml(url);
//   res.write(html)
//   res.end();//通知浏览器结束请求
// }).listen(3000,()=>{
//   console.log('server start')
// })

//等价于上面的代码
const server = http.createServer();
server.on('request',(req,res)=>{
  // console.log(req)
  console.log('请求地址：',req.url)
  console.log('请求方法：',req.method)
  const reqUrl = req.url;
  console.log('reqUrl:',reqUrl)
  //用旧的url的api
  // const urlObj = url.parse(reqUrl)
  // console.log(urlObj)
  // const pathname = urlObj.pathname;

  //用新的URL的api
  const urlObj = new URL(reqUrl,'http://127.0.0.1:3000')
  const pathname = urlObj.pathname;
  //获取查询参数
  var param = urlObj.searchParams,obj = {}
  for(var [key,val] of param){
    obj[key] = val;
  }
  console.log(obj)
  //中文需要配置charset=UTF8,避免乱码
  //设置响应头
  res.writeHead(getStatus(pathname),{'Content-Type':'text/plain;charset=utf-8',"Access-Control-Allow-Origin":'*'})
  const html = rendHtml(pathname,obj);
  res.write(html)
  res.end();//通知浏览器结束请求
})
//跨域
//方式一：jsonp
//①、前端新建script请求；②、后端返回一个函数调用
//方式二：cors:后端设置"access-control-allow-origin":'*'


server.listen(3000,()=>{
  console.log('server start, 监听3000的端口')
})


