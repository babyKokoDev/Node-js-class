const http = require('http');
const server = http.createServer((req, res)=>{
  console.log(req)
  console.log(res)
})

server.listen(5000)

