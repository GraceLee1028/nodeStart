const express = require("express")
const path = require("path");
const app = express();
const qs = require("querystring")//内置对象:解析查询字符串的数据
const bodyParser = require("./middleware/custom-body-parse");
//全局中间件
const loggerMiddleware = function(req,res,next){
  console.log(Date.now(),req.method,req.url)
  next();
}
app.use(loggerMiddleware)
//自定义中间件----解决接收的数据处理
app.post("/sendFile",bodyParser,function(req,res){
  console.log(req.body)
  res.send(req.body)
})
//用户模块路由
const router = require("./router.js")
app.use(router)

app.get('/userinfo',function(req,res){
  res.send(`{'name':"123"}`)
})
//错误级别的中间件[必须注册到所有路由之后]
const errorMw = function(error,req,res,next){
  console.log('报错',error.message)
  res.send("Error："+error.message)
}
app.use(errorMw)
// app.use('/static',express.static(path.resolve(__dirname,"../","/public")))
app.listen(9090,()=>{
  console.log('开始监听')
})