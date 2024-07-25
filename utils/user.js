const express = require('express');
const router = express.Router();
router.post('/info', (req, res) => {
  const userInfo = res.userInfo;
  res.json({ code: 200, msg: '请求成功', data: { id: 1, userInfo: username } });
});
module.exports = router;
