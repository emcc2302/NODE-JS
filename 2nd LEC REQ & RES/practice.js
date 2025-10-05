const http=require('http');

const server=http.createServer((req,res)=>
{
    console.log(req.url, req.method, req.headers);

    if(req.url==="/home"){
        res.write("<h1>Wellcome to HOME </h1>");
        return res.end();
    }

    else if(req.url==="/women"){
        res.write("<h1>Wellcome to Women </h1>");
        return res.end();
    }

     else if(req.url==="/men"){
        res.write("<h1>Wellcome to MEN </h1>");
        return res.end();
    }
     else if(req.url==="/kids"){
        res.write("<h1>Wellcome to Kids </h1>");
        return res.end();
    }
     else if(req.url==="/cart"){
        res.write("<h1>Wellcome cart </h1>");
        return res.end();
    }
res.write(`<!DOCTYPE html>
<html>
<head>
    <title>Simple Navbar</title>
</head>
<body>

    <nav>
        <a href="/home">Home</a> |
        <a href="/women">Women</a> |
        <a href="/men">Men</a> |
        <a href="/kids">Kids</a> |
        <a href="/cart">Cart</a>
    </nav>

</body>
</html>
`);

});
const PORT = 3001;
 server.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
 });