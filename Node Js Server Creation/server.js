const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1'
const port = '5000'

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    fs.readFile(path.join(__dirname, 'item.json'), 'utf8', (err, data)=>{
        if (err) throw err
        const newdata = JSON.parse(data)
        res.end(JSON.stringify(newdata))
    })
    
})

server.listen(port, hostname, ()=> {
    console.log(`Node Js Server is started at http://localhost:${port}`)
})
