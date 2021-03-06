const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..','public')));
app.use(express.static(path.join(__dirname, '..', 'node_modules')));

app.use('/api', require('./api'));

app.use('*', (req, res, next) =>
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});



app.listen(8080, () => {
	console.log('Listening on port 8080');
	});


db.sync()
.then(function () {
  // make sure to replace the name below with your express app
	
})

module.exports = app;