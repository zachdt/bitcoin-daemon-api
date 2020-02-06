const http = require('http')
const { exec } = require('child_process')

exec('bitcoin-cli getblockcount', (err, stdout) => {
  if (err) {
    return
  }
  console.log(`stdout: ${stdout}`)
  console.log(`err: ${err}`)
})

http.createServer(function (req, res) {
  res.write()
  res.end()
}).listen(8080)