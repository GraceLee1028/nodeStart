function auth(req, res, next) {
  if (req.user && req.userId) {
    res.responseStatus = 200;
  } else {
    res.responseStatus = 403;
    res.responseText = '未授权';
  }
  next();
}
function error(err, req, res, next) {
  res.responseStatus = 500;
  res.responseText = error.message || 'Internal Server Error';
  next();
}

module.exports = {
  auth,
  error
};
