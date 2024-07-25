const express = require('express');
const { generateToken } = require('./auth.extend');
const router = express.Router();
router.post('/', (req, res) => {
  const username = req.body.username;
  const pwd = req.body.password;
  const token = generateToken({ username });
  res.json({
    code: 200,
    msg: '登录成功',
    data: { token }
  });
});
module.exports = router;
