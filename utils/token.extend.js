/**
 * jsonwebtoken:生成jwt字符串321·-+
 *
 * *963./852000
 * express-jwt：将jwt字符串解析还原成json对象
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const auth = require('./auth.extend');
const loginRouter = require('./login');
const userRouter = require('./user');
const port = process.env.port || 3000;

//允许跨域处理
app.use(bodyParser.json()); //application/json
app.use(bodyParser.urlencoded({ extended: false })); //application/x-www-form-urlencoded
app.use(cors());
app.use('/api/login', loginRouter);
app.use('/api/*', auth.verifyToken);
app.use('/api/user', userRouter);
app.listen(port, () => {
  console.log(`token app listening on port ${port}`);
});
