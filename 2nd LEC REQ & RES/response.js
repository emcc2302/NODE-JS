 const http=require('http');

const server=http.createServer((req , res)=>{
    console.log(req.url , req.method , req.headers);
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