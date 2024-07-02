const express = require('express');
const path = require('path');
const logMw = require('./modules/log');
const statusMw = require('./modules/status');

const app = express();
const port = 9000;
//静态文件访问
//访问路径：http://localhost:9000/index.html
// app.use(express.static(path.resolve(__dirname, 'dist')));
//访问路径：http://localhost:9000/static/index.html
app.use(logMw.start);
app.use(statusMw.auth);
app.use('/static', express.static(path.resolve(__dirname, 'dist')));
//路由
app.get('/readme', function (req, res) {
  res.send('hello world');
});
//match /use or /user
app.get('/user(Info)?', function (req, res) {
  res.send('欢迎您的加入');
});
app.get('/userInfo/:userId', function (req, res) {
  const params = req.params;
  console.log(params);
  const userId = params.userId;
  res.send('您的账号为：' + userId);
});
const cb1 = function (req, res, next) {
  console.log('001============the response will be sent by the next function ...');
  console.log(req.url);
  next('route'); //跳过剩余的中间件cb2
};
const cb2 = function (req, res, next) {
  console.log('002=============the response will be sent by the next function ...');
  console.log(req.url);
  next();
};
app.get('/example/a', cb1, function (req, res) {
  res.send('Hello from A!');
});
//因为cb1的next('route');会跳过剩余的中间件cb2
app.get('/example/b', [cb1, cb2], function (req, res) {
  res.send('Hello from B!');
});
app
  .route('/info')
  .get(function (req, res) {
    res.send('get user');
  })
  .post(function (req, res) {
    res.send('add user');
  })
  .put(function (req, res) {
    res.send('update the user');
  });
const cb3 = function (req, res, next) {
  const error = new Error('error page');
  next(error);
};
app.get('/error', cb3, function (req, res) {
  res.status(res.responseStatus).send(res.responseText);
});
app.use(statusMw.error);
app.use(logMw.end);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
