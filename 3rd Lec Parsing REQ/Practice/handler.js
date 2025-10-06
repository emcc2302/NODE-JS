const calculateResult=require('./calculate-result');
const requestHandler = (req, res) => {
  if ((req.url === "/")) {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body><h1>Welcome to Home Page</h1></body>");
    res.write("</html>");
    res.write('<a href="/calculator">Calculate Result</a>');
    return res.end();
  } else if ((req.url.toLowerCase() === "/calculator") ){
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    
    <head><title>Calculator</title></head>
    <body><h1>Calculate Your Result</h1>
    <br>
    <form action="/calculate-result" method="POST">
   <input type="number" placeholder="Enter First Number" name="first"/>
   <input type="number" placeholder="Enter Second Number" name="second"/>
   <button type="Submit"> Sum</button>
   </form>
    </body>
    </html>`);
    return res.end();
  }
  else if ((req.url.toLowerCase() === "/calculate-result" ) && req.method==="POST"){

   return calculateResult(req,res);
  
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
    
    <head><title>Calculator</title></head>
    <body><h1>Page Not Found 404</h1>
    <br>
    <a href="/">Go to Home Page </a>
    </body>
    </html>`);
  res.end();
};

module.exports = requestHandler;
