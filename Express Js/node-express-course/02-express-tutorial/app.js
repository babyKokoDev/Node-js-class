const express = require('express')
const app = express()
const path = require('path')



app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res)=> {
//      res.status(200).sendFile(path.join(__dirname, 'index.html'))
// })

// app.get('/about', (req, res)=> {
//     res.send('About Page')
// })

// app.get('/json', (req, res)=> {
//     res.send([{name : 'Elijah'}, {name : 'Toyin'}])
// })

app.all('*', (req, res)=> {
    res.status(404).send('Error Page')
})





app.listen(5000, ()=>{
    console.log('App is listening at port 5000')
})