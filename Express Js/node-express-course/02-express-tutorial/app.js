const express = require('express');
const app = express();
const {products} = require('./data')


app.get('/', (req, res)=>{
   res.send(`<h1>Home Page</h1> <a href="/api/products">products</a>`)
})

app.get('/api/products', (req, res)=>{
    res.json(products)
})




app.listen(5000, ()=> {
    console.log('listening on port 5000')
})