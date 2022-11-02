/*
• Name of program: EECS 368 Assignment 5
Author name: Nguyen Cat Nguyen
Date: Oct 31, 2022
*/

const {createServer} = require("http");
//Connect to the HTTP module.

const methods = Object.create(null);
//Create a null object to store the methods.

createServer((request, response) => {
  let handler = methods[request.method] || notAllowed;
  //create hander to take the request.
  handler(request)
    .catch(error => {
      if (error.status != null) return error;
      //If the error is not null, return the error.
      return {body: String(error), status: 500};
        //If the error is null, return the error message and status code 500.
    })
    .then(({body, status = 200, type = "text/plain"}) => {
        //Then return the body, status and type.
       response.writeHead(status, {"Content-Type": type});
       //Write the head of the response.
       if (body && body.pipe) body.pipe(response);
       // if there is pipe, pipe the body to the response.
       else response.end(body);
       // if not, end the response.
    });
}).listen(8000);

async function notAllowed(request) {
  return {
    status: 405,
    body: `The method ${request.method} is not supported.`
    //Return a status code 405 and a message when detect an invalid request.
  };
}

const {parse} = require("url");
//parse the request body.
const {resolve, sep} = require("path");
//this takes to resolve the path.
const baseDirectory = process.cwd();
//this takes to get the current working directory.

//Create urlPath method.
function urlPath(url) {
  let {pathname} = parse(url);
  //Parse the url.
  let path = resolve(decodeURIComponent(pathname).slice(1));
  //resolve the path by removing the first character.
  if (path != baseDirectory &&
      !path.startsWith(baseDirectory + sep)) {
    throw {status: 403, body: "Forbidden"};
    // throw error status 403 and body "Forbidden" if the path is not the base directory.
  }
  return path;
}


//Create read stream method.
const {createReadStream} = require("fs");
const {stat, readdir} = require("fs").promises;
//Create rmdir method.
const mime = require("mime");
methods.GET = async function(request) {
    //Create a GET method.
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    //If the error is not ENOENT, throw the error.
    else return {status: 404, body: "File not found"};
    //If the error is ENOENT, return status code 404 and body "File not found".
  }
  if (stats.isDirectory()) {
    //If the path is a directory.
    return {body: (await readdir(path)).join("\n")};

  } else {
    //If the 
    return {body: createReadStream(path),type: mime.getType(path)};
    //Return the body and type.
  }
};

//Create rmdir method.
const {rmdir, unlink} = require("fs").promises;
//Create delete method.
methods.DELETE = async function(request) {
  let path = urlPath(request.url);
  //get the path
  let stats;
  try {
    stats = await stat(path);
    //get the stats of the path
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    else return {status: 204};
    //if error code is not ENOENT, throw the error
  }
  if (stats.isDirectory()) await rmdir(path);
  else await unlink(path);
  return {status: 204};
};

//Set the createServer method.
const {createWriteStream} = require("fs");
//Create pipeStream method.
function pipeStream(from, to) {
  return new Promise((resolve, reject) => {
    from.on("error", reject);
    //if there is an error, reject the promise.
    to.on("error", reject);
    //if there is an error, reject the error.
    to.on("finish", resolve);
    //pipe the from to the to.
    from.pipe(to);
  });
}
//Create put method.
methods.PUT = async function(request) {
  let path = urlPath(request.url);
  //get the path
  await pipeStream(request, createWriteStream(path));
  //pipe the request to the createWriteStream.
  return {status: 204};
  //return 204 status.
};


//Create mkdir method.
const {mkdir} = require("fs").promises;

methods.MKCOL = async function(request) { 
    //MKCOL is a method to create a directory.
    let path = urlPath(request.url); 
    //get the path
    let stats; 
    try { 
      stats = await stat(path); 
      //get the stats of the path
    } catch (error) { //catch block
      if (error.code != "ENOENT") throw error;
      //if error code is not ENOENT, throw the error
      await mkdir(path); 
      //if not, create the directory
      return {status: 204};
      //return 204 status
    }
    if (stats.isDirectory()) return {status: 204}; 
    //if stats is a directory, return 204 status
    else return {status: 400, body: "Not a directory"}; 
    //return 400 status and body as Not a directory
  };