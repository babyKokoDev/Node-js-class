const express = require('express');
const app = express();
const {products} = require('./data')


app.get('/', (req, res)=>{
    const newProducts = products.json()
   res.status(200).json(newProducts)
})




app.listen(5000, ()=> {
    console.log('listening on port 5000')
})