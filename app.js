var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var app = express();

/* ------------------------------------------------------- */
//  BODY PARSER
/* ------------------------------------------------------- */

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

/* ------------------------------------------------------- */
//  MORGAN MIDDLEWARE FOR ROUTE INFO
/* ------------------------------------------------------- */

app.use(morgan('dev'));

/* ------------------------------------------------------- */
//  STATIC ROUTES
/* ------------------------------------------------------- */

app.use(express.static(path.join(__dirname, 'browser')));

/* ------------------------------------------------------- */
//  MAIN APPLICATION
/* ------------------------------------------------------- */

app.use('/', function(req, res, next){
	console.log("Middleware working...");
	next();
})

app.get('/', function(req, res, next){
	res.sendFile('index.html');
});

app.listen( 3000, function(){
	console.log("Listing on port 3000!");
})