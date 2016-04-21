var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var apikey = '2664a8f717e9cd0c3d61f2a4990d5df5';
	var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=' + apikey;
	
	var weatherRequest = http.get(weatherUrl, function(response){
		if (response.statusCode == 200){
			body = '';
			response.on('data', function(chunk){
				body += chunk;
				console.log(body);
			});
			response.on('end', function(){
				body = JSON.parse(body);
				res.render('index', { body: body });
			});
		}
	});
});

module.exports = router;
