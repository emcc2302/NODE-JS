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

});

app.use((req,res,next)=>{
    console.log("2nd Middleware", req.url,req.method);
    next();

});

// app.use((req,res,next)=>{
//     console.log("3rd Middleware", req.url,req.method);
//     res.send('<p>Hello Soriful </p>');
//     next();

// });


app.get("/",(req,res,next)=>{
    console.log("Home ", req.url,req.method);
    res.send(`<h1>Home Page</h1>`);

});

app.get("/contact-us",(req,res,next)=>{
    console.log("Contact Page using GET", req.url,req.method);
    res.send(`
        <h1>Contact Page</h1>
        <form action="/contact-us">
        <input type="text" placeholder="Enter Your Name" />;
        <input type="email" placeholder="Enter Your Email"/>
        <button type="submit">Submit</button>
        </form>
        `)

});

app.post("/contact-us",(req,res,next)=>{
    console.log("Contact Page using POST", req.url,req.method);
    res.send(`
        <h1>We will contact u shortly </h1>
        
        `)

});

const PORT = 3002;
app.listen(PORT, () => { //In palce of Server.listen we have to use app.listen
  console.log(`Server running on address http://localhost:${PORT}`);
});
