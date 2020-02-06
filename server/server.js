const http = require('http')
const { exec } = require('child_process')

let blockcount


http.createServer(function (req, res) {

  exec('bitcoin-cli getblockcount', (err, stdout) => {
    if (err) {
      return
    }
    console.log(`blockcount: ${stdout}`)
    console.log(`err: ${err}`)
    blockcount === stdout
  })

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(blockcount)

  req.on('error', function(err) {
    console.log(err)
  })
  res.end()
}).listen(80)