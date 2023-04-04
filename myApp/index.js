const express = require("express")
const app = express();
const port  = 3000;
const userRouter = require('./modules/user.js');
//内置中间件
//通过express.json()中间件，解析表单中的json格式的数据
app.use(express.json())
//全局中间件[应用级别中间件]
app.use(function timeLog(req, res, next) {
  console.log(req.url,'请求时间: ', Date.now());
  next();
});
//用户路由模块[应用级别中间件]
app.use('/user',userRouter)

app.get('/',(req,res)=>{
  res.send('hello world')
})
app.post('/name',(req,res)=>{
  res.send('post新的世界')
})
app.post('/getQuery',(req,res)=>{
  const query = req.query;//查询条件
  res.send(query)
})
//动态匹配参数
app.post('/user/:id/:username',(req,res)=>{
  const params = req.params;
  console.log(params)
  if(params.username!=='lee'){
    throw new Error('当前人不存在')
  }
  const body = req.body;//要想获取请求体需要设置中间件express.json()
  console.log(body)
  res.send(params.username+',你好,你的通行证为：'+params.id)
})

//静态资源先去最先声明的静态资源位置找
//静态资源
app.use(express.static('../build'));//静态资源的访问地址：http://localhost:3000/main.html
//多个静态资源，参数一：创建虚拟路径前缀
app.use('/static', express.static('../build'));//静态资源的访问地址：http://localhost:3000/static/main.html

//错误级别的中间件
app.use(function(error,req,res,next){
  const message = error.message
  console.log('报错：',message)
  res.send(message)
})
app.listen(port,()=>{
  console.log(`监听${port}`);
})