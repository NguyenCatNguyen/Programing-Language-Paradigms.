/*
• Name of program: EECS 368 Assignment 5
Author name: Nguyen Cat Nguyen
Date: Oct 31, 2022
*/
const {createServer} = require("http");
//create a server

const methods = Object.create(null);
//method to handle the request

createServer((request, response) => {
//handler is async funtion that takes request as argument
//return a promise that resolves to an object with status, body, and type properties
  let handler = methods[request.method] || notAllowed; 
  handler(request) //call the handler function
    .catch(error => { 
      if (error.status != null) return error; 
      return {body: String(error), status: 500}; 
      //if error status is not null, return the error
    })
    .then(({body, status = 200, type = "text/plain"}) => { 
       response.writeHead(status, {"Content-Type":type}); 
         //write the head of the response
       if (body && body.pipe) body.pipe(response); 
       else response.end(body); 
    });
}).listen(8000);

async function notAllowed(request) { 
  return {
    status:405,
    body:`Method ${request.method} is not supported.`
  };
}

var {parse} = require("url");
//parse the url
var {resolve, sep} = require("path"); 
//create a server

var baseDirectory = process.cwd(); 
//get the current working directory

function urlPath(url) { 
  let {pathname} = parse(url); 
    //pathname of the url
  let path = resolve(decodeURIComponent(pathname).slice(1)); 
  if (path != baseDirectory &&
      !path.startsWith(baseDirectory + sep)) { 
    throw {status: 403, body: "Forbidden"}; 
  }
  return path;
}

const {createReadStream} = require("fs"); 
const {stat, readdir} = require("fs").promises; 
const mime = require("mime"); 

methods.GET = async function(request) { 
  let path = urlPath(request.url);
  let stats; 
  try { 
    stats = await stat(path); 
  } catch (error) { 
    if (error.code != "ENOENT") throw error; 
    else return {status: 404, body: "File not found"}; 
  }
  if (stats.isDirectory()) { //if stats is a directory 
    return {body: (await readdir(path)).join("\n")}; 
  } else {
    return {body: createReadStream(path), 
            type: mime.getType(path)};
  }
};

const {rmdir, unlink} = require("fs").promises; 
//create delete method
methods.DELETE = async function(request) { 
  let path = urlPath(request.url);
  let stats; 
  try { 
    stats = await stat(path); 
    //get the stats of the path 
  } catch (error) { 
    if (error.code != "ENOENT") throw error; 
    //error code is not ENOENT, throw the error
    else return {status: 204}; 
    //if not, return 204 status
  }
  if (stats.isDirectory()) await rmdir(path); 
  //remove the directory if it is a directory
  else await unlink(path); 
  //if await unlink(path) is not a directory, remove the file
  return {status: 204}; 
  // return 204 status
};

const {createWriteStream} = require("fs");
// Create writable stream
function pipeStream(from, to) { 
  return new Promise((resolve, reject) => { 
    from.on("error", reject); 
    //"from" stream error, reject the promise
    to.on("error", reject); 
    //"to" stream error, reject the promise
    to.on("finish", resolve);
    //"to" stream finish, resolve the promise
    from.pipe(to); 
    //pipe "from" stream to "to" stream 
  });
}
// Create put method
methods.PUT = async function(request) { 
  let path = urlPath(request.url); 
  await pipeStream(request, createWriteStream(path)); 
  return {status: 204}; 
};

const {mkdir} = require("fs").promises; 
//take mkdir from fs.promises

methods.MKCOL = async function(request) { 
  let path = urlPath(request.url); 
  //get the path
  let stats; 
  //create a stats variable
  try { 
    stats = await stat(path); 
    //path stats
  } catch (error) { 
    if (error.code != "ENOENT") throw error;
    //check if the error code is not ENOENT, throw the error
    await mkdir(path); 
    //create the directory if not error
    return {status: 204};
    //return 204 status
  }
  if (stats.isDirectory()) return {status: 204}; 
  //if is a directory, return 204 status
  else return {status: 400, body: "Not a directory"}; 
  //else return 400 status and body as Not a directory
};