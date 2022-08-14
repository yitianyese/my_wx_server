const express = require('express');
const expressWs = require('express-ws');

// /message的路由
const message = require('./routers/message.js');

const app = express();
expressWs(app);

app.use(express.json());

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
})
app.use('/message', message)

app.listen(3000, () => {
  console.log('服务器开启')
})