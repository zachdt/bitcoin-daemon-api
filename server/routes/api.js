const express = require("express")
const router = express.Router()
var request = require("request")

const getBlockCount = require("./methods/0_arg/getBlockCount")
const getBestBlockHash = require("./methods/0_arg/getBestBlockHash")
const getConnectionCount = require("./methods/0_arg/getConnectionCount")
const getDifficulty = require("./methods/0_arg/getDifficulty")
const getBlockchainInfo = require("./methods/0_arg/getBlockchainInfo")
const getMiningInfo = require("./methods/0_arg/getMiningInfo")
const getPeerInfo = require("./methods/0_arg/getPeerInfo")
const getRawMempool = require("./methods/0_arg/getRawMempool")


const dotenv = require("dotenv")
dotenv.config()

const USER = process.env.RPC_USER
const PASS = process.env.RPC_PASSWORD

const headers = {
  "content-type": "text/plain"
}

//Test Route
router.get("/test", (req, res) => res.json({ msg: "Server Active"}))

// VOID RPC METHODS
router.get("/getblockcount", (req, res) => {
  getBlockCount(req, res)
})

router.get("/getbestblockhash", (req, res) => {
  getBestBlockHash(req, res)
})

router.get("/getconnectioncount", (req, res) => {
  getConnectionCount(req, res)
})

router.get("/getdifficulty", (req, res) => {
  getDifficulty(res, req)
})

router.get("/getblockchaininfo", (req, res) => {
  getBlockchainInfo(res, req)
})

router.get("/getmininginfo", (req, res) => {
  getMiningInfo(res, req)
})

router.get("/getpeerinfo", (req, res) => {
  getPeerInfo(res, req)
})

// COMPRESSED METHODS - NVM, CANT COMPRESS HASHES!!!
router.get("/getrawmempool", (req, res) => {
  getRawMempool(res, req)
})


// 1 ARG RPC METHODS 
router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.index
  }"]}`
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
})


router.get("/getblock/:hash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.hash
  }"]}`
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
})


router.get("/getrawtransaction/:id", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
    req.params.id
  }"]}`
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
})


router.get("/decoderawtransaction/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
    req.params.hex
  }"]}`
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
})



module.exports = router
