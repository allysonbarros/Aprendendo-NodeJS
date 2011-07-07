var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end("Hello World!");
}).listen(8000, "127.0.0.1");

console.log("Servidor iniciado e aguardando as conexões.");