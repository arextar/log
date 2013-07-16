var http = require('http');
require('colors')

var colors = {

}

String.prototype.blank

var server = http.createServer(function (req, res) {
	res.writeHead('200', {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type"})
	if (req.method === 'OPTIONS') return res.end()

	var type = req.url.slice(1) || 'log'
	//console.log(type)
	req.on('data', function (d) {
		var str = type.bold + '—' + JSON.parse(d).map(function (n) {
			return JSON.stringify(n)
		}).join(' ')

		if (colors[type]) {
			console.log(str[colors[type]])
		}
		else
		{
			console.log(str)
		}
	})

	res.end()
});

server.listen(1337)