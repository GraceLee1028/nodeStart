function start(req, res, next) {
  const url = req.url;
  req.requestTime = Date.now();
  console.log('request url：', url);
  console.log(`request time :${req.requestTime}`);
  next();
}

function end(req, res, next) {
  const url = req.url;
  req.reponseTime = Date.now();
  console.log('request url：', url);
  console.log(`reponse time :${req.reponseTime}`);
  next();
}

module.exports = {
  start,
  end
};
