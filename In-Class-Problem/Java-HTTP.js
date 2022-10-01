
fetch("http://eloquentjavascript.net/18_http.html){headers: {User-Agent: "Your browser's name"}}
// Send a request to the server
// The server responds with a response object
// Set headers to the response object
// The response object has a status property that tells you the status code of the response
.then(resp => resp.text())
.then(console.log(resp.text)));
// The response object has a text method that returns a promise that resolves to the full response text
// the content