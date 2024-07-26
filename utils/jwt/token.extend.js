/**
 * jsonwebtoken:生成jwt字符串321·-+
 *
 * *963./852000
 * express-jwt：将jwt字符串解析还原成json对象
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { expressjwt } = require('express-jwt');
const app = express();
const auth = require('./auth.extend');
const loginRouter = require('./login');
const userRouter = require('./user');
const { secretKey } = require('./config');
const port = process.env.port || 3000;

//允许跨域处理
app.use(bodyParser.json()); //application/json
app.use(bodyParser.urlencoded({ extended: false })); //application/x-www-form-urlencoded
app.use(cors());
//配置jwt验证
app.use(expressjwt({ secret: secretKey, algorithms: ['HS256'] })).unless({ path: [/^\/api/] });
app.use(auth.errorToken);
app.use('/api/login', loginRouter);
// app.use('/api/*', auth.verifyToken);
app.use('/api/user', userRouter);
app.listen(port, () => {
  console.log(`token app listening on port ${port}`);
});
