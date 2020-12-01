var http = require('http');
const { dirname } = require('path');
console.log("__dirname", __dirname)
console.log("__filename", __filename)

http.createServer((req, res) => {
	console.log(req.url );
	if (req.url === '/') {
		res.end('hello from home page');
	} else {
		res.end(http.STATUS_CODES[404]);
	}
}).listen(5000);
