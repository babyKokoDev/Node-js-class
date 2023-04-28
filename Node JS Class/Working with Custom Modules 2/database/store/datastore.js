const fs = require('fs');
const path = require('path'); 

let getAllEmployee = (callback) => {
    fs.readFile(path.join(__dirname, 'employee.json'), 'utf8', (err, data) => {
        if (err) throw err
        let employee = JSON.parse(data)
        callback(employee)
    })
}

module.exports = {
    getAllEmployee
}