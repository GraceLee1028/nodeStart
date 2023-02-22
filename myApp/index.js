const express = require("express")
const app = express();
const port  = 3000;

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
  console.log(req)
  const params = req.params;
  res.send(params.username+',你好,你的通行证为：'+params.id)
})
//静态资源先去最先声明的静态资源位置找
//静态资源
app.use(express.static('../build'));//静态资源的访问地址：http://localhost:3000/main.html
//多个静态资源，参数一：创建虚拟路径前缀
app.use('/static', express.static('../build'));//静态资源的访问地址：http://localhost:3000/static/main.html

app.listen(port,()=>{
  console.log(`监听${port}`);
})