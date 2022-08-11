const express = require('express');
const BodyParser = require('body-parser')

const app = express();

app.use(BodyParser.urlencoded({extended: false}));

app.listen(3000, () => {
  console.log('服务器开启')
})