// const http = require('http');//NO NEED IN EXPRESS

// External Module
const express = require('express');

// Local Module
// const requestHandler = require('./user');

// const server = http.createServer(app); //THIS ALSO NO NEED
const app=express();
app.use((req,res,next)=>{
    console.log("1st Middleware", req.url,req.method);
    next();
    res.send('<p>Soriful</p>')//NO NEED TO WRITE THE SETHEADER
})

const PORT = 3002;
app.listen(PORT, () => { //In palce of Server.listen we have to use app.listen
  console.log(`Server running on address http://localhost:${PORT}`);
});
