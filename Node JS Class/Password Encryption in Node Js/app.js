const bcrypt = require('bcryptjs')

let user = {
    name : "Elijah",
    email : "aremuelija@gmail.com",
    password : "Babykoko@100"
}

let salt = bcrypt.genSaltSync(10)
let harshedPassword = bcrypt.hashSync(user.password, salt)
console.log(harshedPassword)

let updatedUser = {
    ...user,
    password : harshedPassword
}

console.log(updatedUser)

if (bcrypt.compareSync('Babykoko@100', harshedPassword)){
    console.log("Password matched")
}else {
    console.log("Password not matched")
}