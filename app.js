var express = require('express'),
	app = express(),
	path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.route('/').get(function(req, res, next){
	res.send('index', {});
})

app.listen(3000, function(){
	console.log('CHAT APP working on port 3000');
})