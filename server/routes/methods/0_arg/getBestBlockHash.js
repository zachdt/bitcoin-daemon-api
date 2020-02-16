var request = require("request")

const dotenv = require("dotenv")
dotenv.config()

const USER = process.env.RPC_USER
const PASS = process.env.RPC_PASSWORD

const headers = {
  "content-type": "text/plain"
}

const getBestBlockHash = (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  }
  
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
}

module.exports = getBestBlockHash