var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var helmet = require('helmet');
require('dotenv').config({silent: true});

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// --------------------------------------------- Routes

var users = require('./routes/users');
var login = require('./routes/login');

app.use('/users', users);
app.use('/login', login);

app.get('/', function(request, response) {
  response.send("Heyyy");
});

// --------------------------------------------- Routes

app.use(function(error, request, response, next) {
  response.status(error.status || 500);
  response.json({ error: error.message });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening on 3000');
})