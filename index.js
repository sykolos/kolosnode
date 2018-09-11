var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
	fs.readFile('ize.html', function(err, data) {
	res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
	res.end();
    });
}).listen(port);
