const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.status(200).json([{name:'Joseph'}, {name:'Motunde'}])
})


app.listen(5000, ()=> {
    console.log('Server is listening on port 5000')
})