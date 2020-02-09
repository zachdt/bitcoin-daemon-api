const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 4000 })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log( `[btc-node-websocket] => ${message}`)
  })

  ws.send('The server says hi')
})
