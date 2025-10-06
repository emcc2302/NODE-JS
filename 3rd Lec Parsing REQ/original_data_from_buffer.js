
const fs = require('fs');

const userRequestHandler=(req, res) => {
    console.log(req.url, req.method);
const body=[];
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

        req.on('data',chunk=>{
            console.log(chunk);
            body.push(chunk);
        })

        req.on("end",()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);

            // const res={};
            // const params=new URLSearchParams(parsedBody);

            // for(const [key,val] of params.entries()){
            //     res[key]=val;
            // }
            const params=new URLSearchParams(parsedBody);
            const res=Object.fromEntries(params);//same code like the above
               fs.writeFileSync('user.txt', JSON.stringify(res)); //IT WILL WRIGHT THE ENTER CONTENT INTO THE FILE LIKE A STRING 
        })
    
 
    res.statusCode = 302;//code for redirecting page to another page
    res.setHeader('Location','/');//Location "/" means page will redirect to home page
}

res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Complete Coding</title></head>');
res.write('<body><h1>Like / Share / Subscribe</h1></body>');
res.write('</html>');
res.end();
  
};


module.exports=userRequestHandler;//import just like react

//SHORTCUTS

//exports.handler=userRequestHandler;

//FOR EXPORTS MULTI MODULE

// module.exports={
//     handler:userRequestHandler;
//     extra:Extrs
// }