const express = require('express');
const expressWs = require('express-ws');

const message = require('../controller/message.js');

const router = express.Router();
expressWs(router);

// 接受消息，这个消息都是同一个人发的，都是因为可能发送给不同的人，所以需要两个id，一个是发送人，一个是接收人
router.ws('/sendMessage/:id', message.sendMessage);
// 转发消息
router.ws('/getMessage/:id', message.getMessage)

module.exports = router;
