const express = require('express');
const app = express();
const {products} = require('./data')


app.get('/', (req, res)=>{
   res.send(`<h1>Home Page</h1> <a href="/api/products">products</a>`)
})

app.get('/api/products/:productID', (req, res)=>{
    const {productID} = req.params
    const singleProduct = products.find((product)=>{
       return product.id === Number(productID)
    })
    res.json(singleProduct)
})




app.listen(5000, ()=> {
    console.log('listening on port 5000')
})