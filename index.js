var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("<html><head><title>leszopolip</title></head><body><center><h1 style='color:red'>Leszopolip</h1></center></body></html>");
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
