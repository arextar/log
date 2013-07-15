var http = require('http');
require('colors')

var colors = {

}

var server = http.createServer(function (req, res) {
	res.writeHead('200', {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type"})
	if (req.method === 'OPTIONS') return res.end()

	var type = req.url.slice(1) || 'log'
	//console.log(type)
	req.on('data', function (d) {
		console.log((type.bold + '—' + d)[colors[type] || 'black'])
	})

	res.end()
});

server.listen(1337)