const http=require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" />');
    res.write('<br><input type="submit" value="Submit" >')
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    return res.end();
});


 const PORT = 3001;
 server.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
 });