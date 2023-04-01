const store = require('./database/store/datastore')
const path = require ('path')
const fs = require('fs')    
store.getAllEmployee((data)=>{
    let filename = (path.join(__dirname, 'Util', 'customers.json'))
    fs.writeFile(filename, JSON.stringify(data), 'utf8', (err)=>{
        if (err) throw err
        console.log('Data has been posted to the file directory')
    })
})
