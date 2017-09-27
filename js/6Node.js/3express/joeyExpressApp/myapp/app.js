var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');//一旦 view engine 设置成功，就不需要显式指定引擎（即在render时可省略jade文件后缀）

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：
//还可以加个虚拟路由前缀
//app.use('/static', express.static('public'));
//http://localhost:3000/js/app.js--->http://localhost:3000/static/js/app.js


app.use('/', index);
app.use('/users', users);

//app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。
//app.all('/secret', function (req, res, next) {
//console.log('Accessing the secret section ...');
//next(); // pass control to the next handler
//});
//可以封装成一个中间件作为过滤器
var all = require('./routes/all');
app.use('/all', all);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
