
//模块化
const express =  require('express');
const router = express.Router();
//局部中间件
router.use(function(req,res,next){
  console.log('用户模块局部中间件')
  req.name = 'lee'
  next()
})
router.get('/basicinfo',function(req,res){
  res.send(req.name+'个人信息')
})
router.get('/token',function(req,res){
  res.send(req.name+'token')
})
module.exports =  router