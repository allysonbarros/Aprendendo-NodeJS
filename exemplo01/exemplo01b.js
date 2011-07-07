var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end("<h1>Hello NodeJS!</h1>");
}).listen(8000, "127.0.0.1");

console.log("Servidor iniciado e aguardando as conexões.");