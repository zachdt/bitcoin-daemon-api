const net = require('net')

const client = net.createConnection({ port: 8080 }, () => {
  console.log('CLIENT: YO')
  client.write('CLIENT: HEllo')
})

client.on('data', (data) => {
  console.log(data.toString())
  client.end()
})

client.on('end', () => {
  console.log('CLIENT: Connection Ended to Server')
})