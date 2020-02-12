const request = require('request')

let username = process.argv.length < 2 ? "default-username" : process.argv[2];
let password = process.argv.length < 3 ? "default-password" : process.argv[3];
let method = process.argv.length < 4 ? "getinfo" : process.argv[4]

let options = {
    url: "http://localhost:8332",
    method: "get",
    headers:
    { 
     "content-type": "text/plain"
    },
    auth: {
        user: username,
        pass: password
    },
    body: JSON.stringify( {"jsonrpc": "1.0", "id": "curltest", "method": method, "params": ["1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XZ", 6] })
};

request(options, (error, response, body) => {
    if (error) {
        console.error('An error has occurred: ', error);
    } else {
        console.log('GET successful: ', body);
    }
})