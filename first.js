console.log("Hello World");

const fs=require('fs');
fs.writeFile("output.txt","writing file", (err)=>{
    if(err) console.log("Error occured");
    else console.log("File Written Succesfully");
})