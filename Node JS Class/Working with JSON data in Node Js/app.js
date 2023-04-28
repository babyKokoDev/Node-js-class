const fs = require('fs')

let employees = [{"id":1,"first_name":"Marla","last_name":"Otteridge","email":"motteridge0@wix.com","gender":"Female","ip_address":"211.35.25.215"},
{"id":2,"first_name":"Barnett","last_name":"Rosettini","email":"brosettini1@nih.gov","gender":"Male","ip_address":"20.71.26.54"},
{"id":3,"first_name":"Xaviera","last_name":"Desaur","email":"xdesaur2@wiley.com","gender":"Female","ip_address":"5.122.1.53"},
{"id":4,"first_name":"Dyna","last_name":"Morden","email":"dmorden3@mit.edu","gender":"Female","ip_address":"98.82.179.135"},
{"id":5,"first_name":"Reggy","last_name":"Hek","email":"rhek4@simplemachines.org","gender":"Genderqueer","ip_address":"59.150.200.254"},
{"id":6,"first_name":"Montgomery","last_name":"Bampfield","email":"mbampfield5@desdev.cn","gender":"Male","ip_address":"5.240.35.215"},
{"id":7,"first_name":"Aurel","last_name":"Toombes","email":"atoombes6@cyberchimps.com","gender":"Female","ip_address":"13.24.26.44"},
{"id":8,"first_name":"Gayelord","last_name":"Collinwood","email":"gcollinwood7@ycombinator.com","gender":"Male","ip_address":"196.49.216.85"},
{"id":9,"first_name":"Selinda","last_name":"Defew","email":"sdefew8@cloudflare.com","gender":"Female","ip_address":"3.65.93.67"},
{"id":10,"first_name":"Elwood","last_name":"Wanless","email":"ewanless9@hao123.com","gender":"Male","ip_address":"208.211.13.202"}]

fs.writeFile('employee.json', JSON.stringify(employees), 'utf-8', (err)=>{
   if (err) throw err
   console.log("Data has been written successfully")
})

fs.readFile('employee.json', 'utf-8', (err, data)=> {
    if (err) throw err
    let newData = JSON.parse(data)
    console.log(newData)
})