var http = require('http');
var fs = require('fs');
require('colors')

var colors = {
	info: 'blue',
	pass: 'green',
	warn: 'yellow',
	err: 'red'
}

var server = http.createServer(function (req, res) {
	res.writeHead('200', {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type"})
	if (req.method === 'OPTIONS') return res.end()

	req.on('data', function (d) {
		d = JSON.parse(d + '')

		d.forEach(function (log) {
			var str = log.type.bold + '—' + log.data.map(function (n) {
				return JSON.stringify(n)
			}).join(' ')

			if (colors[log.type]) {
				console.log(str[colors[log.type]])
			}
			else
			{
				console.log(str)
			}
		})

		
	})

	res.end()
});

server.listen(1337)