var express = require('express');
var app = express();
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static('public'));

app.engine('handlebars', exphbs({
  defaultLayout:'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/controller.js');
app.use('/', routes);


mongoose.connect('mongodb://heroku_7sn6k3vx:dvpcksk5n34h4umhr9p5g5n3bo@ds017726.mlab.com:17726/heroku_7sn6k3vx');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

var PORT = process.env.PORT || 3333;
app.listen(PORT, function() {
  console.log('App running on port: ' + PORT);
});
