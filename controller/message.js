const msgObj = {};

class Message {
  constructor() {
    this.name = ['4444']
  }
  sendMessage(ws, req) {
    // 接受客户端发送过来的数据
    ws.on('message', msg => {
      msg = JSON.parse(msg);
      // 接收数据
      if(!msgObj[msg.getId]) msgObj[msg.getId] = [];
      // if(!_self.msgArr[msg.getId].length) _self.msgArr[msg.getId] = [];
      msgObj[msg.getId].push(msg.message)
      // 向客户端发送服务器响应的数据,不能够写在外面，因为只有外界只能够有一个有效的send方法
      ws.send(JSON.stringify(msg.message) + '发送回去给自己的')
    })
  }
  getMessage(ws, req) {
    setInterval(function() {
      // console.log(_self)
      if(msgObj[req.params.id] && msgObj[req.params.id].length) {
        ws.send(JSON.stringify(msgObj[req.params.id].shift()) + '发送给别人的');
      }
    }, 1000)
  }
}

module.exports = new Message();
