const fs = require('fs'); 

// Synchronous code Way
// let fileContent = fs.readFileSync('./msg.txt', 'utf-8');
// console.log(fileContent)

// let newFileContent = `This is the new file content : ${fileContent}`
// fs.writeFileSync('./data.txt', newFileContent, 'utf-8');
// console.log("Data is written to a file") 

// Asynchronous code way

fs.readFile('./msg.txt', 'utf-8', (err, data)=>{
    if (err) throw err;
    fs.writeFile('./newmsg.txt', data, 'utf-8', (err)=>{
        if (err) throw err;
        console.log("Data is writen to the file")
    })
})
