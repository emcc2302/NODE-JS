const http = require('http');
const userRequestHandler=require('./original_data_from_buffer');//from original_data_from_buffer we need userRequestHandler.
//userRequestHandler we can change it what ever we want

const server = http.createServer(userRequestHandler);//now create a server using the userRequestHandler


const PORT = 3001;
 server.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
 });