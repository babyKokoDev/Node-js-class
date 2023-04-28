const path = require('path')
const fs = require('fs')

fs.readFile(path.join(__dirname, 'database', 'Employee', 'employee.json'), 'utf8', (err, data)=>{
    if (err) throw err
    let newData = JSON.parse(data)
    fs.writeFile(path.join(__dirname, 'Util', 'customers.json'), JSON.stringify(newData), 'utf8', (err)=>{
        console.log("Data is written to the path")
    })
})