const express = require('express');
const app = express();
const logger = require('./logger')

app.use('/', logger)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
     res.send('About Page')  
})


app.listen(5000, ()=> {
    console.log('The server is listening on port 5000')
})