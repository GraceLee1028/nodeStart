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
app.listen(port,()=>{
  console.log(`监听${port}`);
})