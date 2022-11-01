/*
• Name of program: EECS 368 Assignment 5
Author name: Nguyen Cat Nguyen
Date: Oct 31, 2022
*/

const {createServer} = require("http");
//create a server

const {createServer} = require("http");
let server = createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");

