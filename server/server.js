const http = require('http')
const { exec } = require('child_process')



http.createServer(function (req, res) {

  let blockcount
  exec('bitcoin-cli getblockcount', (err, stdout) => {
    if (err) {
      return
    }
    console.log(`blockcount: ${stdout}`)
    console.log(`err: ${err}`)
    blockcount === stdout
  })

  res.write(blockcount)
  res.end()
}).listen(8080)