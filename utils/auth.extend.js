const jwt = require('jsonwebtoken');
const secretKey = 'secret__key';
// create token
exports.generateToken = function (payload) {
  const token = `Bearer ${jwt.sign(payload, secretKey, {
    expiresIn: 60 * 60
  })}`;
  return token;
};

exports.verifyToken = function (req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.json({ code: '404', msg: 'token不存在' });
  }
  const token = authorization.split(' ')[1];
  jwt.verify(token, secretKey, function (err, decoded) {
    if (err) {
      return res.json({ code: '401', msg: 'token无效' });
    }
    console.log('verify decoded', decoded);
    res.userInfo = decoded;
    next();
  });
};
