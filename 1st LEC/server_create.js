// const http=require('http');

// function requestListener (req,res){
//     console.log(req);
// }

// http.createServer(requestListener);


//same code using anonymous function ,is a function without a name.
const http=require('http');
http.createServer((req , res)=>{
    console.log(req);
});