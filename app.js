const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');
const app = express();


app.use(cors({
  origin: '*',
  methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
  allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//import Routes

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const logsRouter = require('./routes/logs');
const loginRouter = require('./routes/login');
const jobsRouter = require('./routes/jobs');
const imagesRouter = require('./routes/docker-image');
const connRouter = require('./routes/connections');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/logs', logsRouter);
app.use('/login', loginRouter);
app.use('/jobs', jobsRouter);
app.use('/docker-images', imagesRouter);
app.use('/connections', connRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
