const express = require('express');
const app = express();
const port = process.env.port || 3000;
const user = require('./router/user');
app.use(user);
app.listen(port, () => {
  console.log(`listen  ${port}`);
});
