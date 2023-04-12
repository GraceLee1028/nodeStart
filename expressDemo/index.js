const express = require("express")
const app = express();
//解决不同contentType的传参解析
const bodyParser = require("body-parser")
//解决跨域问题
const cors = require("cors");
app.use(cors({
  credentials: true,
  origin:"http://192.168.100.155:8002"
  // origin:"*" // 如果credentials为true,则origin不能设置为"*"
}));

//全局中间件
const loggerMiddleware = function(req,res,next){
  console.log(Date.now(),req.method,req.url)
  next();
}
app.use(loggerMiddleware)
//解析表单数据的中间件【contentType：x-www-form-urlencoded】
app.use(bodyParser.urlencoded({extended:false}));
//解析【contentType：application/json】
app.use(bodyParser.json());
//post 表单解析
app.post("/getData",function(req,res){
  const body = req.body;  
  console.log(req)
  console.log(body)
  res.send({
    status:0,
    msg:'请求成功',
    data:body
  })
})
//自定义中间件----解决接收的数据处理
app.post("/sendFile",function(req,res){
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