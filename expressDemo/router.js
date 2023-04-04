/**
 * 路由模块
 */
const express = require("express")
const router = express.Router();
//路由中间件
const mw1 = function(req,res,next){
  console.log('当前请求');
  req.startTime = Date.now();
  next();
}
router.get('/user/info',mw1,function(req,res){
  throw new Error("未授权")
  res.send('请求时间为：'+req.startTime);
  console.log('ces')
  res.send('getInfo')
})
router.post('/user/info',function(req,res){
  res.send('updateInfo')
})
router.delete('/user/info',function(req,res){
  res.send('deleteInfo')
})
module.exports = router