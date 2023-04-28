const dotenv = require('dotenv');

// Configure the config file
dotenv.config({path : './config/config.env'})

// to read data from the env file
let DevURL = process.env.DEV_URL
console.log(DevURL)

