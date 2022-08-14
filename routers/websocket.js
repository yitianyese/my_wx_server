const express = require('express');
const expressWs = require('express-ws');

const router = express.Router();
expressWs(router);

const websocket = require('../controller/websocket.js');

router.get('/test', websocket.test);
module.exports = router;
