var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose-q')();

var sendError = require('./error-formatter');

var routes = require('./routes/index');
var users = require('./routes/users');
var locations = require('./routes/location');
var currencies = require('./routes/currency');
var transactions = require('./routes/transaction');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/locations', locations);
app.use('/currencies', currencies);
app.use('/transactions', transactions);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    switch(err.status) {
      case 400:
        sendError(res, 'Bad Request!!', err.stack, 400);
        break;
      case 404:
        sendError(res, 'Not Found!!', null, 404);
        break;
      case 500:
      default:
        sendError(res, 'Internal server Error!!!', err.stack, 500);
    }
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {

  console.error(err.stack);

  res.status(err.status || 500);
  sendError(res, 'Internal server Error!!', null, 500);
});


module.exports = app;
