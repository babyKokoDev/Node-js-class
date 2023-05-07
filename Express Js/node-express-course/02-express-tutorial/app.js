const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const date = new Date().getFullYear()
    console.log(method, url, date)
    next()
}

app.get('/',logger, (req, res) => {
    res.send('Home Page')
})

app.get('/about',logger, (req, res) => {
     res.send('About Page')  
})


app.listen(5000, ()=> {
    console.log('listening on port 5000')
})