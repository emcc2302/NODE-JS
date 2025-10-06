const calculateResult = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodYStr = Buffer.concat(body).toString();
    const param = new URLSearchParams(bodYStr);
    const bodyObj = Object.fromEntries(param);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
         <html>
    <head><title>Calculator</title></head>
    <body><h1>Your Result Is : ${result}</h1>
        </html>
        `);
        return res.end();
  });
};

module.exports = calculateResult;
