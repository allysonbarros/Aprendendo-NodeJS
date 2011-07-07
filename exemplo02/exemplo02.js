var http = require("http");
var contador = 0;

http.createServer(function(request, response) {
	var chunkInterval = setInterval(function() {
		response.write("Contador: " + contador++);
		response.write("\n");
	}, 100);
	
	setTimeout(function() {
		clearInterval(chunkInterval);
		response.end("Requisição finalizada.")
	}, 10000);
	
}).listen(8000, "127.0.0.1");