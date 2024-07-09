const express = require('express');
const app = express();
//overiding the express API
app.response.sendStatus = function (statusCode, contentType, message) {
  return this.contentType(contentType).status(statusCode).send(message);
};

app.post('/user', (req, res) => {
  console.log(res.body);
  res.send('ok');
});
app.listen(3000, () => {
  console.log('connection -------');
});
