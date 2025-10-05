const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Enter Your Details:</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<br><input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>'); 
        res.write('</html>'); 
        return res.end();
    }

    else if (req.url.toLowerCase() === "/submit-details" && // req method kyu ki user data bhejega tb hi chalega only submit form ni bhejne ka
    req.method == "POST") {
    
    fs.writeFileSync('user.txt', 'Soriful IslaM sK'); //create a file called user.txt and sync the value Soriful IslaM sK
    res.statusCode = 302;//code for redirecting page to another page
    res.setHeader('Location','/');//Location "/" means page will redirect to home page
}

res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Complete Coding</title></head>');
res.write('<body><h1>Like / Share / Subscribe</h1></body>');
res.write('</html>');
res.end();
  
});

const PORT = 3001;
 server.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
 });