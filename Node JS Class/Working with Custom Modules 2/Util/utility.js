const fs = require('fs');
const path = require('path');

let writeToFile = (filename, data) => {
  fs.writeFile(filename, data, 'utf8', (err)=>{
      console.log('Data is written to the file')
  });
}

module.exports = {
    writeToFile
}