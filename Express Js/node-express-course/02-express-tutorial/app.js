const express = require('express');
const app = express();
const {products} = require('./data')


app.get('/api/v1/query', (req, res)=>{
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
           return product.name.startsWith(search)
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1){
        res.status(200).json([{success : true, data : []}])
    }

    res.status(200).json(sortedProducts)
})




app.listen(5000, ()=> {
    console.log('listening on port 5000')
})