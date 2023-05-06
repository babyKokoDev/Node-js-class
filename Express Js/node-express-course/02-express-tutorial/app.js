const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.status(200).json([{name : 'Elijah'}, {name : 'Tunde'}])
})




app.listen(5000, ()=> {
    console.log('listening on port 5000')
})