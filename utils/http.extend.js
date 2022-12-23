/**
 * 内置http模块
 */
const http = require('http');
const url = require('url');
function getStatus(url){
  let status=['/','/list'].includes(url)?200:404
  return status;
}
function rendHtml(url){
  let html=''
  switch(url){
    case '/':
      html = '<h1>首页</h1>'
      break;
    case '/list':
      html = '<h1>列表页面</h1>'
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
  console.log(urlObj.searchParams)
  //中文需要配置charset=UTF8,避免乱码
  //设置响应头
  res.writeHead(getStatus(pathname),{'Content-Type':'text/html;charset=utf-8'})
  const html = rendHtml(pathname);
  res.write(html)
  res.end();//通知浏览器结束请求
})

server.listen(3000,()=>{
  console.log('server start, 监听3000的端口')
})
