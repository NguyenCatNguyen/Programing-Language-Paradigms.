1. What is the standard output for the JavaScript code to the right?
- The output is
- => "The file contains: I promise the Node was here"
2. Add comments to each line of the code to the right.
```javascript
const {writeFile} = require("fs"); 
// Import the writeFile function from the fs module
writeFile("graffiti.txt", "I promise the Node was here", err => {
    // Write the string "I promise the Node was here" to the file graffiti.txt
if (err) console.log(`Failed to write file: ${err}`);
// If there is an error, log the error message else console.log("File written.");
else console.log("File written.");
});
const {readFile} = require("fs").promises;
// Import the readFile function from the fs module
readFile("graffiti.txt", "utf8")
// Read the file graffiti.txt
.then(text => console.log("The file contains:", text));
//Print the text in the file
```
3. Assuming the file 20_node.html existed on eloquentjavascript.net, what is the LINUX terminal output for the JavaScript code to the right?
- The output is
- => Server responded with status code (response.statusCode)
4. Add comments to each line of the code to the right.

```javascript
const {request} = require("https");
// Using the request function from the https module that can be used to make requests to https URLs
let requestStream = request({
// Create a request stream
hostname: "eloquentjavascript.net",
// The hostname is eloquentjavascript.net
path: "/20_node.html",
// The path is /20_node.html
method: "GET",
headers: {Accept: "text/html"}
//The header is Accept: text/html
}, response => {
}, response => {
console.log("Server responded with status code",
response.statusCode);
// Print the status code of the response
});
});
requestStream.end();
// End the request stream
```