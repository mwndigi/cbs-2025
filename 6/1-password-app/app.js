var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Cache-Control header for at undgå caching
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    next();
});

app.use('/', indexRouter);

module.exports = app;
