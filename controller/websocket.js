class Ws {
  test(ws) {
    console.log('122');
    ws.send('ok');
  }
}

module.exports = new Ws()