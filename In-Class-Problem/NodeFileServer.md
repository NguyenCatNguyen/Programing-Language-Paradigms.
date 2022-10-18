```javascript
methods.UNKNOWN = async function(request) {
let path = urlPath(request.url);
let stats;
try {
stats = await stat(path);
} catch (error) {
if (error.code != "ENOENT") throw error;
else return {status: 204};
}
if (stats.isDirectory()) await rmdir(path);
else await unlink(path);
return {status: 204};
};
```