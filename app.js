var express = require('express');
var http    = require('http');
var path    = require('path');
var engine  = require('ejs-locals');
var app     = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

console.log("Hi");

// Enable routing and use port 5000.
require('./router')(app);
app.set('port', 5000);

// Set up ejs templating.
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// Set view folder.
app.set('views', path.join(__dirname, 'views'));
 

// Sets the folder where the static content go into
app.use(express.static(path.join(__dirname, 'public')));
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app
