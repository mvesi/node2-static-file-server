var fs = require('fs');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	hipster : function(req,res){
	// Part II - Blocking Code
	// var fileContents = fs.readFileSync('data.txt');
	fs.readFile('data.txt', function(err,data){
		console.log(arguments);
		if (err) {
			res.send('file does not exist');
		}
		res.header('Content-Type', 'text/html');

		res.send(data);
	});
	}
};

module.exports = indexController;