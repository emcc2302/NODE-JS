 const http=require('http');

const server=http.createServer((req , res)=>{
    console.log(req.url , req.method , req.headers);

    
   
   if(req.url==='/'){
     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>Welcome to Home Page</h1>')
    res.write('</html>');
    return res.end(); //always use return either server will kill in the if block is will not go to the next block
   }

   else if(req.url.toLowerCase()==='/products'){

     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
     res.write('<h1>Checkout our Products</h1>')
    res.write('</html>');
    return res.end();
   }
   res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Soriful</title></head>');
    res.write('<body>Hello Soriful</body>');
    res.write('</html>');
    res.end();
    
});



 

const PORT=3001;
server.listen( PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});