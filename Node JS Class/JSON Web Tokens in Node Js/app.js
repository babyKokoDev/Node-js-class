const jwt = require('jsonwebtoken');

let user = {
    id : 'abcd-sfsd-456461',
    name : "Elijah Aremu",
    email : 'aremuelija@gmail.com'
}

let payload = {
    id : user.id,
    name : user.name
}

let secretKey = 'elibabanla'

let token = jwt.sign(payload, secretKey, {expiresIn : 3600})
console.log(token)

jwt.verify(token, secretKey, (err, decoded)=>{
    if (err) throw err
    console.log(decoded)
})