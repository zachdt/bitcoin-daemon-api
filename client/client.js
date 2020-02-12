const WebSocket = require('ws')

require('dotenv').config()


const IP = process.env.IP

const URL = `ws://${IP}:4000`


const connection = new WebSocket(URL)

connection.onopen = () => {
  connection.send('[btc-node-websocket-client] => Client Connected') 
}

connection.onerror = (error) => {
  console.log(`[btc-node-websocket-client] Error => ${error}`)
}

connection.onmessage = (e) => {
  console.log(`[btc-node-websocket-server] => ${e.data}`)
}
