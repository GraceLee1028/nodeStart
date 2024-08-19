const express = require('express');

const userRouter = express.Router();
//注册新用户
userRouter.post('register', function (req, res) {
  res.send('register ok');
});

//登录
userRouter.get('login', function (req, res) {
  res.send('login  ok');
});

module.exports = userRouter;
